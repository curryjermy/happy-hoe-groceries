document.addEventListener('DOMContentLoaded', function() {
const salesForm = document.querySelector(".forms-sample .btn btn-gradient-primary me-2");
salesForm.addEventListener("click", (event) => {
    event.preventDefault();

    const nameOfProduce = document.getElementById("producename").value;
    const typeOfProduce = document.getElementById("producetype").value;
    const weightOfProduce = document.getElementById("weight").value;
    const amountPaid = document.getElementById("amountpaid").value;
    const nameOfTheBuyer = document.getElementById("buyername").value;
    const branchName = document.getElementById("branchname").value;
    const branchContactInfo = document.getElementById("branchcontact").value;
    const produceSellingPrice = document.getElementById("sellingprice").value;

    if (!nameOfProduce){
        alert("please insert a produce name");
        return;
    }
    if (!typeOfProduce){
        alert("please insert a produce type");
        return;
    }
    if (!weightOfProduce){
        alert("please insert a weight");
        return;
    }
    if (!amountPaid){
        alert("please insert an amount");
    }
    if (!nameOfTheBuyer){
        alert("please insert buyer name");
    }
    if (!branchName){
        alert("please insert branch name");
    }
    if (!branchContactInfo){
        alert("please insert branch contact info");
    }
    if (!produceSellingPrice){
        alert("please insert an amount");
    }
});
});
