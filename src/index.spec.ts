import { convert } from './index';

import { expect } from 'chai';

describe('Converter', () => {
    it('empty string', () => {
        const result = convert('');
        expect(result).to.equal('');
    });

    it('0', () => {
        const result = convert('0');
        expect(result).to.equal('ศูนย์บาทถ้วน');
    });

    it('0.25', () => {
        const result = convert('0.25');
        expect(result).to.equal('ยี่สิบห้าสตางค์');
    });

});