var toHex = function(num) {
    if (num == 0) return '0';
    let map = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let result = '';
    while (num != 0) {
        let c = map[num & 15]; // map last 4 bits to a hex digit
        result = c + result;
        num = num >> 4;
    }
    return result;
};
