import './main.css';

import { LocationCard, Warning } from '../../components';

import { Rendering } from './Rendering';

customElements.define('app-location-card', LocationCard);
new Rendering();
new Warning();

class Touch {
	private boundOnTouchMove = this.onTouchMove.bind(this);
	private readonly images: NodeListOf<HTMLImageElement> | null = null;

	constructor() {
	  this.images = document.querySelectorAll('img');
	  this.images.forEach((img) => {
		img.addEventListener('touchmove', this.boundOnTouchMove);
	  });
	}

	private fibonacci(num: number): number {
		if (num <= 1) return 1;
		return this.fibonacci(num - 1) + this.fibonacci(num - 2);
	}

	private onTouchMove(event: TouchEvent): void {
		this.fibonacci(35);
    	console.log('touchmove');
	}
}
new Touch();
