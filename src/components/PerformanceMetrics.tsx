import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Code, Zap, Globe } from "lucide-react";
import "./index.css";
const PerformanceMatrics = () => {
    const expertise = [
        {
            title: "Total Returns",
            description: "74.2%",
            etc: "Year to date"
        },
        {
            title: "Sharpe Ratio",
            description: "3.42",
            etc: "Risk-adjusted return"
        },
        {
            title: "Max Drawdown",
            description: "8.4",
            etc: "Portfolio protection"
        },
        {
            title: "Success Rate",
            description: "91.4%",
            etc: "Profitable trades"
        }
    ];

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#14f195]">
                            Performance Metrics
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Transparent on-chain performance tracking for all deployed smart contracts and trading bots. Ensures consistent returns through automated strategies with robust risk management encoded in the blockchain.
                        </p>
                    </div>

                    {/* Contact Methods */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        {expertise.map((method, index) => (
                            <Card key={index} className="rounded-lg border text-card-foreground shadow-sm bg-card/60 backdrop-blur-sm p-6">
                                <h3 className="text-lg text-muted-foreground mb-2 ">
                                    {method.title}
                                </h3>
                                <p className="text-3xl text-muted-foreground mb-4 text-white font-bold">
                                    {method.description}
                                </p>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {method.etc}
                                </p>
                            </Card>
                        ))}
                    </div>

                    <div className="rounded-lg border text-card-foreground shadow-sm bg-card/60 backdrop-blur-sm">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                    Performance Comparison
                                </h3>
                                {/* <div dir="ltr" className="w-[260px]">
                                    <div
                                        role="tablist"
                                        aria-orientation="horizontal"
                                        className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-3"
                                    >
                                        <button
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                        >
                                            1 Month
                                        </button>
                                        <button
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                        >
                                            6 Months
                                        </button>
                                        <button
                                            type="button"
                                            role="tab"
                                            aria-selected="true"
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground shadow-sm"
                                        >
                                            1 Year
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="p-6 pt-0">
                            <div className="h-80 w-full">
                                {/* Chart container */}
                                <div className="recharts-responsive-container" style={{ width: "100%", height: "100%" }}>
                                    {/* Replace with your Recharts component */}

                                    <BarChartSVG year={2024}/>

                                </div>
                            </div>

                            {/* Legend */}
                            <div className="mt-4 flex flex-wrap gap-4 justify-center">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                                    <span className="text-sm">Solana On-Chain Program</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                                    <span className="text-sm">Solana Trading Bot</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-solana-accent rounded-sm"></div>
                                    <span className="text-sm">Trend Following Bot</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-pink-500 rounded-sm"></div>
                                    <span className="text-sm">Token Launch</span>
                                </div>
                            </div>
                        </div>
                    </div>



                </div >
            </div >
        </section >
    );
};

export default PerformanceMatrics;






const BarChartSVG = ({year}) => {
    return (
        <svg
            className="recharts-surface"
            width="954"
            height="320"
            viewBox="0 0 954 320"
            style={{ width: "100%", height: "100%" }}
        >
            <title></title>
            <desc></desc>
            <defs>
                <clipPath id="recharts1-clip">
                    <rect x="60" y="20" height="265" width="864" />
                </clipPath>
            </defs>

            <g className="recharts-cartesian-grid">
                <g className="recharts-cartesian-grid-horizontal">
                    <line
                        strokeDasharray="3 3"
                        stroke="#333"
                        opacity="0.2"
                        fill="none"
                        x1="60"
                        y1="285"
                        x2="924"
                        y2="285"
                    />
                    <line
                        strokeDasharray="3 3"
                        stroke="#333"
                        opacity="0.2"
                        fill="none"
                        x1="60"
                        y1="218.75"
                        x2="924"
                        y2="218.75"
                    />
                    <line
                        strokeDasharray="3 3"
                        stroke="#333"
                        opacity="0.2"
                        fill="none"
                        x1="60"
                        y1="152.5"
                        x2="924"
                        y2="152.5"
                    />
                    <line
                        strokeDasharray="3 3"
                        stroke="#333"
                        opacity="0.2"
                        fill="none"
                        x1="60"
                        y1="86.25"
                        x2="924"
                        y2="86.25"
                    />
                    <line
                        strokeDasharray="3 3"
                        stroke="#333"
                        opacity="0.2"
                        fill="none"
                        x1="60"
                        y1="20"
                        x2="924"
                        y2="20"
                    />
                </g>

                <g className="recharts-cartesian-grid-vertical">
                    <line
                        strokeDasharray="3 3"
                        stroke="#333"
                        opacity="0.2"
                        fill="none"
                        x1="168"
                        y1="20"
                        x2="168"
                        y2="285"
                    />
                    <line
                        strokeDasharray="3 3"
                        stroke="#333"
                        opacity="0.2"
                        fill="none"
                        x1="384"
                        y1="20"
                        x2="384"
                        y2="285"
                    />
                    <line
                        strokeDasharray="3 3"
                        stroke="#333"
                        opacity="0.2"
                        fill="none"
                        x1="600"
                        y1="20"
                        x2="600"
                        y2="285"
                    />
                    <line
                        strokeDasharray="3 3"
                        stroke="#333"
                        opacity="0.2"
                        fill="none"
                        x1="816"
                        y1="20"
                        x2="816"
                        y2="285"
                    />
                    <line
                        strokeDasharray="3 3"
                        stroke="#333"
                        opacity="0.2"
                        fill="none"
                        x1="60"
                        y1="20"
                        x2="60"
                        y2="285"
                    />
                    <line
                        strokeDasharray="3 3"
                        stroke="#333"
                        opacity="0.2"
                        fill="none"
                        x1="924"
                        y1="20"
                        x2="924"
                        y2="285"
                    />
                </g>
            </g>

            {/* X Axis */}
            <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                <line
                    orientation="bottom"
                    width="864"
                    height="30"
                    stroke="#888"
                    fontSize="12"
                    x1="60"
                    y1="285"
                    x2="924"
                    y2="285"
                    className="recharts-cartesian-axis-line"
                    fill="none"
                />
                <g className="recharts-cartesian-axis-ticks">
                    <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line
                            orientation="bottom"
                            x1="168"
                            y1="291"
                            x2="168"
                            y2="285"
                            stroke="#888"
                            fontSize="12"
                        />
                        <text
                            orientation="bottom"
                            x="168"
                            y="310"
                            textAnchor="middle"
                            fill="#888"
                        >
                            Q1 {year}
                        </text>
                    </g>
                    <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line
                            orientation="bottom"
                            x1="384"
                            y1="291"
                            x2="384"
                            y2="285"
                            stroke="#888"
                            fontSize="12"
                        />
                        <text
                            orientation="bottom"
                            x="384"
                            y="310"
                            textAnchor="middle"
                            fill="#888"
                        >
                            Q2 {2024}
                        </text>
                    </g>
                    <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line
                            orientation="bottom"
                            x1="600"
                            y1="291"
                            x2="600"
                            y2="285"
                            stroke="#888"
                            fontSize="12"
                        />
                        <text
                            orientation="bottom"
                            x="600"
                            y="310"
                            textAnchor="middle"
                            fill="#888"
                        >
                            Q3 {year}
                        </text>
                    </g>
                    <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line
                            orientation="bottom"
                            x1="816"
                            y1="291"
                            x2="816"
                            y2="285"
                            stroke="#888"
                            fontSize="12"
                        />
                        <text
                            orientation="bottom"
                            x="816"
                            y="310"
                            textAnchor="middle"
                            fill="#888"
                        >
                            Q4 {year}
                        </text>
                    </g>
                </g>
            </g>

            {/* Y Axis */}
            <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                <line
                    orientation="left"
                    x1="60"
                    y1="20"
                    x2="60"
                    y2="285"
                    stroke="#888"
                    fontSize="12"
                />
                <g className="recharts-cartesian-axis-ticks">
                    <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line x1="54" y1="285" x2="60" y2="285" stroke="#888" fontSize="12" />
                        <text x="52" y="285" textAnchor="end" fill="#888">
                            0%
                        </text>
                    </g>
                    <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line x1="54" y1="218.75" x2="60" y2="218.75" stroke="#888" fontSize="12" />
                        <text x="52" y="218.75" textAnchor="end" fill="#888">
                            9%
                        </text>
                    </g>
                    <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line x1="54" y1="152.5" x2="60" y2="152.5" stroke="#888" fontSize="12" />
                        <text x="52" y="152.5" textAnchor="end" fill="#888">
                            18%
                        </text>
                    </g>
                    <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line x1="54" y1="86.25" x2="60" y2="86.25" stroke="#888" fontSize="12" />
                        <text x="52" y="86.25" textAnchor="end" fill="#888">
                            27%
                        </text>
                    </g>
                    <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line x1="54" y1="20" x2="60" y2="20" stroke="#888" fontSize="12" />
                        <text x="52" y="20" textAnchor="end" fill="#888">
                            36%
                        </text>
                    </g>
                </g>
            </g>

            {/* Bars Group 1 - #9945FF */}
            <g className="recharts-layer recharts-bar">
                <path d="M81.6,152.82A4,4,0,0,1,85.6,148.82L117.6,148.82A4,4,0,0,1,121.6,152.82L121.6,285L81.6,285Z" fill="#9945FF" />
                <path d="M297.6,126.32A4,4,0,0,1,301.6,122.32L333.6,122.32A4,4,0,0,1,337.6,126.32L337.6,285L297.6,285Z" fill="#9945FF" />
                <path d="M513.6,143.99A4,4,0,0,1,517.6,139.99L549.6,139.99A4,4,0,0,1,553.6,143.99L553.6,285L513.6,285Z" fill="#9945FF" />
                <path d="M729.6,132.21A4,4,0,0,1,733.6,128.21L765.6,128.21A4,4,0,0,1,769.6,132.21L769.6,285L729.6,285Z" fill="#9945FF" />
            </g>
            {/* Bars Group 2 - #14F195 */}
            <g className="recharts-layer recharts-bar">
                <path d="M125.6,198.46A4,4,0,0,1,129.6,194.46L161.6,194.46A4,4,0,0,1,165.6,198.46L165.6,285L125.6,285Z" fill="#14F195" />
                <path d="M341.6,180.06A4,4,0,0,1,345.6,176.06L377.6,176.06A4,4,0,0,1,381.6,180.06L381.6,285L341.6,285Z" fill="#14F195" />
                <path d="M557.6,206.56A4,4,0,0,1,561.6,202.56L593.6,202.56A4,4,0,0,1,597.6,206.56L597.6,285L557.6,285Z" fill="#14F195" />
                <path d="M773.6,188.89A4,4,0,0,1,777.6,184.89L809.6,184.89A4,4,0,0,1,813.6,188.89L813.6,285L773.6,285Z" fill="#14F195" />
            </g>
            {/* Bars Group 3 - #03E1FF */}
            <g className="recharts-layer recharts-bar">
                <path d="M169.6,77.74A4,4,0,0,1,173.6,73.74L205.6,73.74A4,4,0,0,1,209.6,77.74L209.6,285L169.6,285Z" fill="#03E1FF" />
                <path d="M385.6,57.86A4,4,0,0,1,389.6,53.86L421.6,53.86A4,4,0,0,1,425.6,57.86L425.6,285L385.6,285Z" fill="#03E1FF" />
                <path d="M601.6,176.38A4,4,0,0,1,605.6,172.38L637.6,172.38A4,4,0,0,1,641.6,176.38L641.6,285L601.6,285Z" fill="#03E1FF" />
                <path d="M817.6,29.89A4,4,0,0,1,821.6,25.89L853.6,25.89A4,4,0,0,1,857.6,29.89L857.6,285L817.6,285Z" fill="#03E1FF" />
            </g>
            {/* Bars Group 4 - #F46FF6 */}
            <g className="recharts-layer recharts-bar">
                <path d="M213.6,110.86A4,4,0,0,1,217.6,106.86L249.6,106.86A4,4,0,0,1,253.6,110.86L253.6,285L213.6,285Z" fill="#F46FF6" />
                <path d="M429.6,90.99A4,4,0,0,1,433.6,86.99L465.6,86.99A4,4,0,0,1,469.6,90.99L469.6,285L429.6,285Z" fill="#F46FF6" />
                <path d="M645.6,128.53A4,4,0,0,1,649.6,124.53L681.6,124.53A4,4,0,0,1,685.6,128.53L685.6,285L645.6,285Z" fill="#F46FF6" />
                <path d="M861.6,79.94A4,4,0,0,1,865.6,75.94L897.6,75.94A4,4,0,0,1,901.6,79.94L901.6,285L861.6,285Z" fill="#F46FF6" />
            </g>
        </svg>
    );
};
