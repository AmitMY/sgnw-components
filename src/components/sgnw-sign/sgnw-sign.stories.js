import {SgnwSign} from '../../../dist/collection/components/sgnw-sign/sgnw-sign';
import docs from './sgnw-sign.docs.mdx';
import { action } from '@storybook/addon-actions';
import { h } from 'jsx-dom';

export default {
  title: 'sgnw-components/Component/sgnw-sign',
  component: SgnwSign,
  parameters: { 
    docs: { page: docs }
  }
};

//import { Checked, Unchecked, Unassigned } from '../Task.stories';
//const Template = (args) => <sgnw-sign {...arg} />;

//export const Basic = Template.bind({});
//Basic.args = { items: [
//  Checked.args, Checked.args, Unchecked.args, Unassigned.args
//]};

export const FSW = (args) => (
  <div>
    <h2>Formal SignWriting in ASCII (FSW)</h2>
    <h2><sgnw-sign {...args} /></h2>
    <pre><code>&lt;sgnw-sign fsw="{args.fsw}" styling="{args.styling}" /&gt;</code></pre>
  </div>
);
FSW.args = {
  fsw: 'AS14c00S14c08S22520S22520S22a07S22a11S33e00M541x567S33e00482x483S14c00513x534S14c08466x536S22a07521x500S22a11463x500S22520509x520S22520463x519',
  styling: '',
  onClick: action('clicked')
};

export const SWU = (args) => (
  <div>
    <h2>SignWriting in Unicode (SWU)</h2>
    <h2><sgnw-sign {...args} /></h2>
    <pre><code>&lt;sgnw-sign swu="{args.swu}" styling="{args.styling}" /&gt;</code></pre>
  </div>
);
SWU.args = {
  swu: '𝠀񁳴񁳶񉌍񉌕񁳲񁳸𝠃𝤭𝤩񁳼𝣭𝣤񁳴𝤉𝣤񉌍𝤡𝣺񉌕𝣠𝣺񁳺𝣭𝤑񁳲𝤉𝤑',
  styling: '',
  onClick: action('clicked')
};
