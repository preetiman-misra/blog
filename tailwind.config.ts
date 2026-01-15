import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {
			fontSize: {
				'fluid-2xs': 'var(--step--2)',
				'fluid-xs': 'var(--step--1)',
				'fluid-sm': 'var(--step-0)',
				'fluid-base': 'var(--step-0)',
				'fluid-md': 'var(--step-1)',
				'fluid-lg': 'var(--step-2)',
				'fluid-xl': 'var(--step-3)',
				'fluid-2xl': 'var(--step-4)',
				'fluid-3xl': 'var(--step-5)'
			},
			spacing: {
				'fluid-3xs': 'var(--space-3xs)',
				'fluid-2xs': 'var(--space-2xs)',
				'fluid-xs': 'var(--space-xs)',
				'fluid-s': 'var(--space-s)',
				'fluid-m': 'var(--space-m)',
				'fluid-l': 'var(--space-l)',
				'fluid-xl': 'var(--space-xl)',
				'fluid-2xl': 'var(--space-2xl)',
				'fluid-3xl': 'var(--space-3xl)',
				'fluid-s-m': 'var(--space-s-m)',
				'fluid-m-l': 'var(--space-m-l)',
				'fluid-l-xl': 'var(--space-l-xl)'
			},
			typography: {
				DEFAULT: {
					css: {
						'--tw-prose-body': 'var(--tw-prose-slate-800)',
						fontSize: 'var(--step-0)',
						lineHeight: '1.75',
						h1: {
							fontSize: 'var(--step-4)',
							marginTop: 'var(--space-xl)',
							marginBottom: 'var(--space-m)'
						},
						h2: {
							fontSize: 'var(--step-3)',
							marginTop: 'var(--space-l)',
							marginBottom: 'var(--space-s)'
						},
						h3: {
							fontSize: 'var(--step-2)',
							marginTop: 'var(--space-m)',
							marginBottom: 'var(--space-xs)'
						},
						p: {
							marginTop: 'var(--space-s)',
							marginBottom: 'var(--space-s)'
						}
					}
				}
			}
		}
	},
	plugins: [typography]
} satisfies Config;
