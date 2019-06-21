const numberText = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
const digitText = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน'];

const _getText = (value:string):string => {
    let digit = 0;
    let text = '';
    for (let i = value.length - 1; i >= 0; i--) {
        const million = Math.floor(digit / 6);
        let millionText = '';
        if (digit % 6 === 0) {
        for (let j = 0; j < million; j++) {
            millionText = millionText + 'ล้าน';
        }
        }
        if (value[i] === '1' && digit % 6 === 0 && digit !== value.length - 1) {
        text = `เอ็ด${millionText}${text}`;
        }
        else {
        const numVal = parseInt(value[i]);
        if (digit % 6 === 1 && numVal === 1) {
            text = `สิบ${text}`;
        }
        else if (digit % 6 === 1 && numVal === 2) {
            text = `ยี่สิบ${text}`;
        }
        else {
            text = `${numberText[parseInt(value[i])]}${digitText[digit % 6]}${millionText}${text}`;
        }
        }
        digit++;
    }
    return text;
}

const _parseNumber = (val: string): number | undefined  => {
    return _isNumber(val) ? parseFloat(parseFloat(val).toFixed(2)) : undefined;
}

const _isNumber = (str: string): boolean => {
    return !isNaN(parseFloat(str)) && isFinite(parseFloat(str));
  }



class Converter {
  public convert(valueInput: string):string {
    let value = _parseNumber(valueInput);
    let text = '';
    if (value !== undefined) {
      const valueStr = value.toString();
      const arrStr = valueStr.split('.', 2);
      const decicaml = arrStr[0];
      const point = arrStr[1] ? parseInt(arrStr[1]).toString() : undefined;

      if ((decicaml !== '0') || (decicaml === '0' && point === undefined)) {
        text = _getText(decicaml);
        text = `${text}บาท`;
      }
      
      if(point) {
        text = `${text}${_getText(point)}สตางค์`;
      } else {
        text = `${text}ถ้วน`;
      }
    }
    return value !== undefined ? text : '';
  }
}

export default new Converter();