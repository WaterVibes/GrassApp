declare module '@tremor/react' {
  import { FC, ReactNode } from 'react';

  export interface CommonProps {
    className?: string;
    children?: ReactNode;
  }

  export interface CardProps extends CommonProps {}
  export interface TitleProps extends CommonProps {}
  export interface TextProps extends CommonProps {
    suppressHydrationWarning?: boolean;
  }
  export interface TabProps extends CommonProps {
    value: string;
  }
  export interface TabListProps extends CommonProps {}
  export interface TabGroupProps extends CommonProps {}
  export interface TabPanelProps extends CommonProps {}
  export interface TabPanelsProps extends CommonProps {}
  export interface GridProps extends CommonProps {
    numItems?: number;
    numItemsSm?: number;
    numItemsLg?: number;
  }
  export interface MetricProps extends CommonProps {}
  export interface FlexProps extends CommonProps {
    justifyContent?: string;
    alignItems?: string;
  }
  export interface ListProps extends CommonProps {}
  export interface ListItemProps extends CommonProps {}
  export interface BadgeProps extends CommonProps {
    color?: string;
  }
  export interface ProgressBarProps extends CommonProps {
    value: number;
    color?: string;
  }
  export interface BaseChartProps extends CommonProps {
    data: any[];
    index: string;
    categories: string[];
    colors?: string[];
    valueFormatter?: (value: number) => string;
    yAxisWidth?: number;
  }
  export interface AreaChartProps extends BaseChartProps {}
  export interface BarChartProps extends BaseChartProps {
    stack?: boolean;
  }
  export interface DonutChartProps extends CommonProps {
    data: any[];
    category: string;
    index: string;
    colors?: string[];
    valueFormatter?: (value: number) => string;
  }
  export interface DateRangePickerValue {
    from: Date;
    to: Date;
  }
  export interface DateRangePickerProps extends CommonProps {
    value: DateRangePickerValue;
    onValueChange: (value: DateRangePickerValue) => void;
  }

  export const Card: FC<CardProps>;
  export const Title: FC<TitleProps>;
  export const Text: FC<TextProps>;
  export const Tab: FC<TabProps>;
  export const TabList: FC<TabListProps>;
  export const TabGroup: FC<TabGroupProps>;
  export const TabPanel: FC<TabPanelProps>;
  export const TabPanels: FC<TabPanelsProps>;
  export const Grid: FC<GridProps>;
  export const Metric: FC<MetricProps>;
  export const Flex: FC<FlexProps>;
  export const List: FC<ListProps>;
  export const ListItem: FC<ListItemProps>;
  export const Badge: FC<BadgeProps>;
  export const ProgressBar: FC<ProgressBarProps>;
  export const AreaChart: FC<AreaChartProps>;
  export const BarChart: FC<BarChartProps>;
  export const DonutChart: FC<DonutChartProps>;
  export const DateRangePicker: FC<DateRangePickerProps>;
} 