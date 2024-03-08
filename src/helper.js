export const convertor3000 = (str) => {
    let arr = str.split('\n')
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].replace(/\d+\)/, "").split('-').map(e => e.replace(/_/g, '-').trim());
      const ran = Math.floor(Math.random() * 2);
      if(ran === 1) {
        const f = arr[i][0]
        arr[i][0] = arr[i][1]
        arr[i][1] = f
      }
    }
    return arr
  }