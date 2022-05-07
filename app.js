const profileDataArgs = process.argv.slice(2, process.argv.length);

// console.log(profileDataArgs);

const printProfileData = (profileDataArr) => {
  for (let i = 0; i < profileDataArr.length; i++) {
    console.log(profileDataArr[i]);
  }

  console.log("===============");

  profileDataArr.forEach((profileitem) => console.log(profileitem));
};
printProfileData(profileDataArgs);
