var input=require("prompt-sync")();
console.log('Welcome to BABA ka Dhaba !!! \nWhat do you want t do ? \n1) BreakFast \n2) Lunch \n3) Dinner')
var user=input("enter any choose----")

if (user == "1"){
    console.log("1.Poha \n2.Pav Bhaji") 
    let user = input("any choose ---")
    if (user == "1"){
        console.log("1.Halp Plate 30 rupess \n2.full Plate 50 rupess")
        let plate = input("wad do you want do")
        if (plate == "1"){
            console.log('Ye lijiye aapka poha 1 halp 30 rupess ka !!')
        }
        else{
            console.log("Ye lijiye aapka 1 plate poha 50 rupess ka !!!")
        }
    }
    else if (user == "2"){
        console.log('1.Halp Plate 30 rupess \n2.full Plate 50 rupess')
        let plate = input("wad do you want----")
        if (plate == '1'){
            console.log('Ye lijiye aapka 1 half Pav Bhaji 30 Rupess ki !!')
        }
        else{
            console.log("Ye lijiye Aapka 1 Plate Pav Bhaji 50 Rupess ki !!")
        }
    }
}
else if (user == 2){
    console.log("1.Dal Rice \n2.Eggs Rice")
    let user = input("any choose :---")
    if (user == '1'){
        console.log('1.Halp Thali  80 rupess \n2.full Thali 120 rupess')
        let plate=input('what do you want to do')
        if (plate == "1"){
            console.log('Ye Lijiye Aapki 1 Half Thali 80 Rupeess')
        } 
        else{
            console.log("Ye Lijiye 1 full Thali 120 Rupess ki")
        }
    }
    else{
        console.log('1.Halp Thali  90 rupess \n2.full Thali 150 rupess')
        let plate=input('what do you want to do :---')
        if (plate == '1'){
            console.log('Ye Lijiye Aapki 1 Half Thali 90 Rupeess')
        }
        else{
            console.log('Ye Lijiye Aapki 1 Full Thali 150 Rupeess')
        }
    }
}
else{
    console.log('1.MutterPaneer+Roti+Rice\n2.Chicken Roti+Rice')
    let user=(input('any choose :---'))
    if (user == '1'){
        console.log('1.Halp Thali  110 rupess \n2.full Thali 200 rupess')
        let plate=input('what do you want to do')
        if (plate == "1"){
            console.log('Ye Lijiye Aapki 1 Half Thali 110 Rupeess')
        }
        else{
            console.log('Ye Lijiye Aapki 1 Full Thali 200 Rupeess')
        }
    }
}
