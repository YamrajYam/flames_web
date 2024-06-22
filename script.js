document.getElementById('flamesForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let str11 = document.getElementById('name1').value;
    let str22 = document.getElementById('name2').value;
    let newName = str11 + str22;
    let str1 = str11.toLowerCase();
    let str2 = str22.toLowerCase();
  
    let tnum = newName.length;
  
    function commonCharCount(str1, str2) {
      let count = 0;
      const arr1 = str1.split('');
      const arr2 = str2.split('');
  
      for (let i = 0; i < arr1.length; i++) {
        const char = arr1[i];
        const index = arr2.indexOf(char);
  
        if (index !== -1) {
          arr2.splice(index, 1);
          count++;
        }
      }
  
      return count;
    }
  
    let cnum = commonCharCount(str1, str2);
  
    let str = "FLAMES";
    let rnum = tnum - cnum;
    let r_num = rnum % 6;
    let r1_num = r_num - 1;
  
    let result = "";
    let bgClass = "";
    if (r1_num == 0) {
      result = "You got F - Yay, friends!";
      bgClass = "bg-f";
    } else if (r1_num == 1) {
      result = "You got L - Wow, lovers!";
      bgClass = "bg-l";
    } else if (r1_num == 2) {
      result = "You got A - Aww, affectionate!";
      bgClass = "bg-a";
    } else if (r1_num == 3) {
      result = "You got M - Congratulations on marriage!";
      bgClass = "bg-m";
    } else if (r1_num == 4) {
      result = "You got E - Oh no, enemies!";
      bgClass = "bg-e";
    } else if (r1_num == 5 || r1_num == -1) {
      result = "You got S - Oops, siblings!";
      bgClass = "bg-s";
    }
  
    document.getElementById('result').innerText = result;
    document.body.className = bgClass; // Change background image
  });
  