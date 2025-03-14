from setuptools import setup, find_packages

setup(
    name="proxyga",
    version="1.0.0",
    packages=find_packages(),
    install_requires=[
        "fastapi",
        "uvicorn",
        "pydantic",
        "redis",
        "selenium",
        "webdriver_manager",
        "requests",
    ],
    python_requires=">=3.8",
) 