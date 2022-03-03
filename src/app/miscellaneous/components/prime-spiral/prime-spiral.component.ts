import { Component, ViewChild, ElementRef } from '@angular/core';

import { SideNavService } from '../../../shared/components/sidenav/sidenav.service';

@Component({
	selector: 'prime-spiral',
	templateUrl: './prime-spiral.component.html',
	styles: [
		`
    .prime-spiral-wrap{ width: 800px; height: 800px; border: solid 1px;}
  `,
	],
	/// template: ``,
})
export class PrimeSpiralComponent implements AfterViewInit {
	
	maxNumber = 500;
	@ViewChild('mainPath') mainPath: ElementRef;
	constructor(private readonly sideNavService: SideNavService) {}
	drawingMode: 'squares' | 'dotted-line' = 'dotted-line';
	drawColor = 'lightblue';

	ngAfterViewInit() {
		this.computeAndDraw();
		setTimeout(() => {
			this.sideNavService.close();
		}, 1000);
	}

	computeAndDraw() {
		this.mainPath.nativeElement.setAttributeNS(null, 'd', '');
		document.getElementById('circle-group').innerHTML = '';
		const middlePoint = 500;
		const currentPoint = { x: middlePoint, y: middlePoint };

		let d = `M${currentPoint.x},${currentPoint.y} `;

		const isPrime = (n) => {
			if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
			var max = Math.sqrt(n); //returns the square root of the passed value
			for (var i = 2; i <= max; i++) {
				if (n % i == 0) return false;
			}
			return true;
		};
		let minX = middlePoint;
		let maxX = middlePoint;
		let minY = middlePoint;
		let maxY = middlePoint;

		const drawColor = 'lightblue';

		const points = [];
		let nextDir = 'r'; // r, l, u, d
		const step = 38;
		const circleGroup = document.getElementById('circle-group');
		const svgns = 'http://www.w3.org/2000/svg';

		const circle = document.createElementNS(svgns, 'circle');
		circle.setAttributeNS(null, 'cx', currentPoint.x);
		circle.setAttributeNS(null, 'cy', currentPoint.y);
		circle.setAttributeNS(null, 'stroke', 'none');
		circle.setAttributeNS(null, 'fill', '#2196f3');
		circle.setAttributeNS(null, 'r', '9');
		circleGroup.appendChild(circle);

		for (let i = 2; i <= this.maxNumber; i++) {
			switch (nextDir) {
				case 'r':
					currentPoint.x += step;
					if (maxX < currentPoint.x) {
						maxX = currentPoint.x;
						nextDir = 'u';
					}
					break;
				case 'u':
					currentPoint.y -= step;
					if (minY > currentPoint.y) {
						minY = currentPoint.y;
						nextDir = 'l';
					}
					break;
				case 'l':
					currentPoint.x -= step;
					if (minX > currentPoint.x) {
						minX = currentPoint.x;
						nextDir = 'd';
					}
					break;
				case 'd':
					currentPoint.y += step;
					if (maxY < currentPoint.y) {
						maxY = currentPoint.y;
						nextDir = 'r';
					}
					break;
				default:
					console.error('What direction?');
			}
			d += `L${currentPoint.x},${currentPoint.y} `;

			const is_prime = isPrime(i);

			// const circle = document.createElementNS(svgns, 'circle');
			// circle.setAttributeNS(null, 'cx', currentPoint.x);
			// circle.setAttributeNS(null, 'cy', currentPoint.y);
			// circle.setAttributeNS(null, 'stroke', is_prime ? drawColor : 'none');
			// circle.setAttributeNS(null, 'fill', is_prime ? drawColor : 'lightblue');
			// circle.setAttributeNS(null, 'r', is_prime ? '7' : '2');
			// circleGroup.appendChild(circle);

			if (this.drawingMode === 'dotted-line') {
				this.drawDottedLines(circleGroup, currentPoint, is_prime, i, d);
			} else {
				this.drawSquares(circleGroup, currentPoint, is_prime, i);
			}
			// this.drawSquares(circleGroup, currentPoint, is_prime, i)

			const textLength = ('' + i).length;
			const shiftText = (textLength * 9) / 2;

			const text = document.createElementNS(svgns, 'text');
			text.setAttributeNS(null, 'x', '' + (currentPoint.x - shiftText));
			text.setAttributeNS(null, 'y', '' + (currentPoint.y + 5));
			text.textContent = i;
			if (is_prime) circleGroup.appendChild(text);
		}
	}

	drawSquares(group: SVGGElement, point: { x: number; y: number }, isPrime: boolean, value) {
		const svgns = 'http://www.w3.org/2000/svg';

		const textLength = ('' + value).length;
		const shiftText = (textLength * 9) / 2;
		const square = document.createElementNS(svgns, 'rect');
		square.setAttributeNS(null, 'x', '' + (point.x - 15));
		square.setAttributeNS(null, 'y', '' + (point.y - 15));
		square.setAttributeNS(null, 'width', '30');
		square.setAttributeNS(null, 'height', '30');
		square.setAttributeNS(null, 'stroke', 'green');
		square.setAttributeNS(null, 'fill', 'lightblue');
		if (!isPrime) square.setAttributeNS(null, 'fill', 'none');
		group.appendChild(square);
	}

	drawDottedLines(group: SVGGElement, point: { x: number; y: number }, isPrime: boolean, value, d) {
		const svgns = 'http://www.w3.org/2000/svg';

		const textLength = ('' + value).length;
		const shiftText = (textLength * 9) / 2;

		const circle = document.createElementNS(svgns, 'circle');
		circle.setAttributeNS(null, 'cx', point.x);
		circle.setAttributeNS(null, 'cy', point.y);
		circle.setAttributeNS(null, 'stroke', isPrime ? this.drawColor : 'none');
		circle.setAttributeNS(null, 'fill', isPrime ? this.drawColor : 'lightblue');
		circle.setAttributeNS(null, 'r', isPrime ? '7' : '2');
		group.appendChild(circle);

		this.mainPath.nativeElement.setAttributeNS(null, 'd', d);
		this.mainPath.nativeElement.setAttributeNS(null, 'stroke', this.drawColor);
	}
}
