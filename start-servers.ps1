# Script to start both frontend and backend servers
[CmdletBinding()]
param()

begin {
    # Set strict error handling
    $ErrorActionPreference = 'Stop'

    # Initialize paths
    $backendPath = Join-Path -Path $PSScriptRoot -ChildPath 'proxyga'
    $frontendPath = Join-Path -Path $PSScriptRoot -ChildPath 'grassapp-web'

    # Function to stop processes by name
    function Stop-ProcessByName {
        param(
            [string]$ProcessName
        )
        $null = Get-Process -Name $ProcessName -ErrorAction SilentlyContinue | Stop-Process -Force
    }
}

process {
    try {
        # Stop existing processes
        Write-Host 'Stopping existing processes...'
        Stop-ProcessByName -ProcessName 'python'
        Stop-ProcessByName -ProcessName 'node'

        # Verify directories exist
        if (-not (Test-Path -Path $backendPath)) {
            throw "Backend directory not found: $backendPath"
        }
        if (-not (Test-Path -Path $frontendPath)) {
            throw "Frontend directory not found: $frontendPath"
        }

        # Start backend server
        Write-Host 'Starting backend server...'
        $currentLocation = Get-Location
        Set-Location -Path $backendPath
        $pythonProcess = Start-Process -FilePath 'python' -ArgumentList 'run_server.py' -NoNewWindow -PassThru
        Set-Location -Path $currentLocation

        # Start frontend server
        Write-Host 'Starting frontend server...'
        Set-Location -Path $frontendPath
        $npmProcess = Start-Process -FilePath 'npm' -ArgumentList @('run', 'dev') -NoNewWindow -PassThru
        Set-Location -Path $currentLocation

        # Show server info
        Write-Host ''
        Write-Host 'Servers started successfully:'
        Write-Host 'Frontend: http://localhost:3006'
        Write-Host 'Backend: http://localhost:8001'
        Write-Host ''
        Write-Host 'Press Ctrl+C to stop servers...'

        # Monitor server processes
        while ($true) {
            Start-Sleep -Seconds 1

            if ($pythonProcess.HasExited -or $npmProcess.HasExited) {
                if ($pythonProcess.HasExited) {
                    Write-Warning "Backend server stopped with exit code: $($pythonProcess.ExitCode)"
                }
                if ($npmProcess.HasExited) {
                    Write-Warning "Frontend server stopped with exit code: $($npmProcess.ExitCode)"
                }
                break
            }
        }
    }
    catch {
        Write-Error -Message "Error: $($_.Exception.Message)"
        exit 1
    }
    finally {
        Write-Host 'Cleaning up processes...'
        
        if ($pythonProcess) {
            $null = Get-Process -Id $pythonProcess.Id -ErrorAction SilentlyContinue | Stop-Process -Force
        }
        if ($npmProcess) {
            $null = Get-Process -Id $npmProcess.Id -ErrorAction SilentlyContinue | Stop-Process -Force
        }

        Stop-ProcessByName -ProcessName 'python'
        Stop-ProcessByName -ProcessName 'node'
        
        Write-Host 'All processes stopped.'
    }
} 