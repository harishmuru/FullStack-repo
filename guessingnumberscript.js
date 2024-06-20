let guess=6;
alert("guess number between 1 to 10");
num=prompt("Enter the random number from 1 to 10")
while(num!=guess)
    {
        console.log("Try again");
        num=prompt("Enter some other number");
    }
if(guess==num)
    {
        document.write("its correct");
    }