import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionBackLink, AccordionContent, AccordionSummary } from './Accordion';

const meta = {
  id: 'Component/DADS v2/Accordion',
  title: 'Component/アコーディオン',
  component: Accordion,

  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <Accordion className='text-std-16N-170'>
        <AccordionSummary className='desktop:text-std-18N-160' id='accordion-example-summary-1'>
          <h3>ダミーテキストとは何ですか？</h3>
        </AccordionSummary>
        <AccordionContent>
          <p className='mb-4'>これはダミーテキストです。</p>
          <p>
            ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
          </p>
          <AccordionBackLink
            className='mt-4 [text-spacing-trim:trim-start]'
            href='#accordion-example-summary-1'
          >
            「ダミーテキストとは何ですか？」の先頭に戻る
          </AccordionBackLink>
        </AccordionContent>
      </Accordion>
    );
  },
};
