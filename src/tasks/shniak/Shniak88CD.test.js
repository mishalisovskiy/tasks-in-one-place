import { swap } from './utils';

describe('testing swap function', () => {
  it('n= 0', () => {
    const result = swap(0);
    expect(result).toEqual('101');
  });

  it('n= 111', () => {
    const result = swap(111);
    expect(result).toEqual('11111');
  });

  it('n= 1234', () => {
    const result = swap(1234);
    expect(result).toEqual('142311');
  });

  it('n= -123', () => {
    const result = swap(-123);
    expect(result).toEqual('1312-1');
  });

  it('n= arrgs', () => {
    const result = swap('arrgs');
    expect(result).toEqual('1srrga1');
  });

  it('n= 1234f56789', () => {
    const result = swap('1234f56789');
    expect(result).toEqual('19234f567811');
  });
});
