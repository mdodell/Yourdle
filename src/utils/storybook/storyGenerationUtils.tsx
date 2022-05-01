import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

type StoryType = 'atom' | 'molecule' | 'organism' | 'template';

interface Config<Props>
	extends Omit<
		ComponentMeta<React.ComponentType<Props>>,
		'title' | 'component'
	> {
	Component: React.ComponentType<Props>;
	variant: StoryType;
}

/**
 * Generates a configuration for a Storybook component.
 * The title is automatically generated based on the variant.
 *
 * @param Config - accepts a Component, the atomic design variant (molecule, atom, organism, or template), and the props for Storybook's ComponentMeta type
 * @returns a Storybook ComponentMeta config
 */
export function generateStorybookConfig<Props>({
	Component,
	variant,
	argTypes,
	...rest
}: Config<Props>) {
	const variantToPluralUppercase = `${variant[0].toUpperCase()}${variant.slice(
		1
	)}s`;

	const config: ComponentMeta<typeof Component> = {
		component: Component,
		title: `components/${variantToPluralUppercase}/${Component.name}`,
		argTypes: {
			// @ts-expect-error automatically disable ref, regardless of component type
			ref: {
				table: {
					disable: true,
				},
			},
			...argTypes,
		},
		...rest,
	};

	return config;
}

/**
 *
 *
 * @param Component - the Component that is being rendered as a Template
 * @returns Template - a ComponentStory function, which accepts the Component's props as a parameter
 */
export function generateStorybookTemplate<Props>(
	Component: Config<Props>['Component']
) {
	const Template: ComponentStory<typeof Component> = (args) => (
		<Component {...args} />
	);

	return Template;
}
