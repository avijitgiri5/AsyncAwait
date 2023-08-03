console.log("Person 1: Show ticket");
console.log("Person 2: Show ticket");

async function preMovie (){
    const promiseWifebringTicket = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Ticket')

        },3000)

    })
    const getPopcorn=new Promise((resolve,reject)=>{
        resolve('Popcorn');
    })
    const addbutter=new Promise((resolve,reject)=>{
        resolve('Butter')
    })
    const getColdDrings=new Promise((resolve,reject)=>{
        resolve('cold drink')
    })

    const ticket=await promiseWifebringTicket;
    console.log(`wife : I have the ${ticket}`);
    console.log('husband : we should go');
    console.log('wife : no i am hungry');

    const popcorn=await getPopcorn;
    console.log(`husband : i got some ${popcorn}`);
    console.log('husband : we should go');
    console.log('wife : I need butter on my popcorn');

    let butter=await addbutter;
    console.log(`husband : i got some ${butter} on popcorn`);
    console.log('husband : anything else darling');
    console.log('wife : I need a cold drink')

    let Colddrink=await getColdDrings;
    console.log(`husband : here is your ${Colddrink}`);
    console.log('husband : anything else darling');
    console.log('wife : lets go getting late');
    console.log('husband : thank you for the reminder');

    return ticket;
}
preMovie().then((m)=>{console.log(`person 3 : show ${m}`)})

console.log("Person 4: Show ticket");
console.log("Person 5: Show ticket");