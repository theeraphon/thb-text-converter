import converter from './index';

import { expect } from 'chai';

describe('Converter', () => {
    it('empty string', () => {
        const result = converter.convert('');
        expect(result).to.equal('');
    });

    it('0', () => {
        const result = converter.convert('0');
        expect(result).to.equal('ศูนย์บาทถ้วน');
    });

    it('0.25', () => {
        const result = converter.convert('0.25');
        expect(result).to.equal('ยี่สิบห้าสตางค์');
    });

});