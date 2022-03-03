interface ChartBubble {
	score: number;
	value: number;
	debts: number;
	probability: number;
}
export class BubbleDataResponse {
	data: ChartBubble[];
}
