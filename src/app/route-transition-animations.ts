import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
	transition('One => Two, One => Three, One => Four, One => Five, One => Six, One => Seven, Two => Three, Two => Four, Two => Five, Two => Six, Two => Seven, Three => Four, Three => Five, Three => Six, Three => Seven, Four => Five, Four => Six, Four => Seven, Five => Six, Five => Seven, Six => Seven', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ right: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('0.8s ease-out', style({ right: '100%', opacity: 0 }))]),
			query(':enter', [animate('0.8s ease-out', style({ right: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	]),
	transition('Seven => One, Seven => Two, Seven => Three, Seven => Four, Seven => Five, Seven => Six, Six => Five, Six => Four, Six => Three, Six => Two, Six => One, Five => One, Five => Two, Five => Three, Five => Four, Four => One, Four => Two , Four => Three, Three => One, Three => Two, Two => One', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ left: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('0.8s ease-out', style({ left: '100%', opacity: 0 }))]),
			query(':enter', [animate('0.8s ease-out', style({ left: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	])
]);