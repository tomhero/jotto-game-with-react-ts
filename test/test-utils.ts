import { ShallowWrapper } from 'enzyme';

export function findByTesttAttr(el: ShallowWrapper, attrValue: string): ShallowWrapper {
  return el.find(`[data-test="${attrValue}"]`);
}
