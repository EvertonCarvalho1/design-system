import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui-ecss/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac fermentum mauris. Donec nunc sem, maximus in mauris vitae, mollis volutpat arcu. Donec ultrices porttitor nisi ut sollicitudin. Pellentesque ultrices varius urna, sit amet sagittis massa laoreet et. Proin rhoncus tortor sit amet sapien ullamcorper, eu commodo nibh faucibus. Donec commodo lacinia nunc ut porta. Ut interdum tellus mollis, tincidunt massa a, interdum enim. Maecenas vitae faucibus felis, ut luctus lacus. Morbi mollis finibus odio, nec iaculis massa mattis vitae.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
