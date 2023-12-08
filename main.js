/////////////// left sec scripts cod///////////////
let step1 = document.querySelector('#step-1')
let step2 = document.querySelector('#step-2')
let step3 = document.querySelector('#step-3')
let step4 = document.querySelector('#step-4')

let num_step_1 = document.querySelector('#num-step-1')
let num_step_2 = document.querySelector('#num-step-2')
let num_step_3 = document.querySelector('#num-step-3')
let num_step_4 = document.querySelector('#num-step-4')

let info = document.querySelector('#info')
let plan = document.querySelector('#plan')
let AddOns = document.querySelector('#add-ons')
let summary = document.querySelector('#summary')

num_step_1.style.background = '#bde1fc'

step1.addEventListener('click', () => {
    info.style.display = 'block'
    plan.style.display = 'none'
    AddOns.style.display = 'none'
    summary.style.display = 'none'
    num_step_1.style.background = '#bde1fc'
    num_step_2.style.background = ''
    num_step_3.style.background = ''
    num_step_4.style.background = ''
})

step2.addEventListener('click', () => {
    info.style.display = 'none'
    plan.style.display = 'block'
    AddOns.style.display = 'none'
    summary.style.display = 'none'
    num_step_1.style.background = ''
    num_step_2.style.background = '#bde1fc'
    num_step_3.style.background = ''
    num_step_4.style.background = ''
})

step3.addEventListener('click', () => {
    info.style.display = 'none'
    plan.style.display = 'none'
    AddOns.style.display = 'block'
    summary.style.display = 'none'
    num_step_1.style.background = ''
    num_step_2.style.background = ''
    num_step_3.style.background = '#bde1fc'
    num_step_4.style.background = ''
})

step4.addEventListener('click', () => {
    info.style.display = 'none'
    plan.style.display = 'none'
    AddOns.style.display = 'none'
    summary.style.display = 'block'
    num_step_1.style.background = ''
    num_step_2.style.background = ''
    num_step_3.style.background = ''
    num_step_4.style.background = '#bde1fc'
})

/////////////// // info scrips code start/////////////



let namee = document.querySelector('#name')
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')


let step_1 = document.querySelector('#step-1')
let step_2 = document.querySelector('#step-2')
let step_3 = document.querySelector('#step-3')
let step_4 = document.querySelector('#step-4')


let span_name = document.querySelector('#span-name')
let span_email = document.querySelector('#span-mail')

let InfoButton = document.querySelector('#info-button')
let emailpat = /@gmail/;






namee.addEventListener('input', () => {
    let valuename = namee.value.length;
    if (valuename < 4) {
        span_name.style.display = 'block'
        if (Window.innerWidth > 1080) {
            span_name.style.margin = '-.8rem 0 1rem 4rem'
        }
        span_name.style.margin = '-.8rem 0 1rem 0rem'
    }
    else if (valuename > 4) {
        span_name.style.display = 'none'
    }
})

email.addEventListener('input', () => {

    let valuename = email.value.length;
    if (!emailpat.test(email.value)) {
        span_email.style.display = 'block'
    }
    else if (valuename > 4) {
        span_email.style.display = 'none'
    }
})

InfoButton.addEventListener('click', () => {
    if (namee.value.length < 4 && !emailpat.test(email.value)) {
        span_name.style.display = 'block'
        if (Window.innerWidth > 1080) {
            span_name.style.margin = '-.8rem 0 1rem 4rem'
        }
        span_name.style.margin = '-.8rem 0 1rem 0rem'
        span_email.style.display = 'block'

    } else {
        info.style.display = 'none'
        plan.style.display = 'block'
        num_step_1.style.background = ''
        num_step_2.style.background = '#bde1fc'

    }

})

/////////////////////info scripts code end/////////////

////////////////////plan scripts code start////////////
let total = 0;
let PricePlan = 0;
let YourPlan;
let PeriodTime;
let SelectPlan = document.querySelectorAll('.select-plan');
let price = document.querySelectorAll('.price')
let price1 = document.querySelector('#price1')
let price2 = document.querySelector('#price2')
let price3 = document.querySelector('#price3')
let period = document.querySelector('#period')
let slidbar = document.querySelector('.slider-op')



let PlanButton = document.querySelector('#plan-button')
let ErrPlan = document.querySelector('#err-plan')




SelectPlan.forEach((e) => {
    e.addEventListener('click', () => {
        SelectPlan.forEach((e) => {
            if (e.classList.length == 2) {
                e.classList.remove('facke')
            }
        })
        e.classList.add('facke')

    })
})
price1.addEventListener('click', () => {

    slidbar.style.left = '12rem'
    period.value = 'on'
    PricePlan = 9;
    YourPlan = 'Acarde'
    PeriodTime = 'Monthly'



})
price2.addEventListener('click', () => {
    slidbar.style.left = '12rem'
    period.value = 'on'
    PricePlan = 12;
    YourPlan = 'Advanced'
    PeriodTime = 'Monthly'



})
price3.addEventListener('click', () => {
    slidbar.style.left = '12rem'
    period.value = 'on'
    PricePlan = 15;
    YourPlan = 'pro'
    PeriodTime = 'Monthly'



})
period.addEventListener('change', () => {
    if (period.value == 'on') {
        slidbar.style.left = '13.7rem'
        PricePlan *= 12;
        period.value = 'off'
        PeriodTime = 'Yearly'

    } else {
        slidbar.style.left = '12rem'
        PricePlan /= 12
        period.value = 'on'
        PeriodTime = 'Monthly'
    }

})
PlanButton.addEventListener('click', () => {
    console.log(PricePlan)
    if (PricePlan == 0) {
        ErrPlan.style.display = 'block'
    } else {
        num_step_2.style.background = ''
        num_step_3.style.background = '#bde1fc'
        plan.style.display = 'none'
        AddOns.style.display = 'block'

    }

})
/////////////////////plan scripts code end/////////////

////////////////////ons scripts code start////////////


let online = document.querySelector('#Online')
let extra = document.querySelector('#extra')
let castomize = document.querySelector('#castomize')
let OnsButton = document.querySelector('#ons-button')
// varibales of the summary
let SummaryOns1 = document.querySelector('#s-o-1')
let SummaryOns2 = document.querySelector('#s-o-2')
let SummaryOns3 = document.querySelector('#s-o-3')
//



online.addEventListener('change', () => {

    if (online.value == 'on') {
        total += 1;
        online.value = 'off'
        SummaryOns1.style.display = 'flex'

    } else {
        total -= 1
        extra.value = 'on'
        SummaryOns1.style.display = 'none'
    }

})



extra.addEventListener('change', () => {
    if (extra.value == 'on') {
        total += 2;
        extra.value = 'off'
        SummaryOns2.style.display = 'flex'
    } else {
        total -= 2
        extra.value = 'on'
        SummaryOns2.style.display = 'none'
    }

})


castomize.addEventListener('change', () => {
    if (castomize.value == 'on') {
        total += 2;
        castomize.value = 'off'
        SummaryOns3.style.display = 'flex'
    } else {
        total -= 2
        castomize.value = 'on'
        SummaryOns3.style.display = 'none'
    }

})

OnsButton.addEventListener('click', () => {
    TxtSummaryPlan.innerHTML = `${YourPlan}(${PeriodTime})`
    PriceSummaryPlan.innerHTML = `+$${PricePlan}/mo`
    TotalAmount.innerHTML = `+$${total + PricePlan}/mo`
    AddOns.style.display = 'none'
    summary.style.display = 'block'
    num_step_3.style.background = ''
    num_step_4.style.background = '#bde1fc'
})
/////////////////////ons scripts code end/////////////

////////////////////sommary scripts code start////////////
let TotalAmount = document.querySelector('#total-amount')
let TxtSummaryPlan = document.querySelector('#txt-s-p')
let PriceSummaryPlan = document.querySelector('#price-s-p')
let Confirm = document.querySelector('#confirm')
let ConfirmButton = document.querySelector('#summary-button')

ConfirmButton.addEventListener('click', () => {
    summary.style.display = 'none'
    Confirm.style.display = 'flex'
})


let GoBack1 = document.querySelector('#go-back-2')
let GoBack2 = document.querySelector('#go-back-3')
let GoBack3 = document.querySelector('#go-back-4')

GoBack1.addEventListener('click', () => {
    console.log('ali')
    plan.style.display = 'none'
    info.style.display = 'block'
    num_step_2.style.background = ''
    num_step_1.style.background = '#bde1fc'
})
GoBack2.addEventListener('click', () => {
    AddOns.style.display = 'none'
    plan.style.display = 'block'
    num_step_3.style.background = ''
    num_step_2.style.background = '#bde1fc'
})
GoBack3.addEventListener('click', () => {
    summary.style.display = 'none'
    AddOns.style.display = 'block'
    num_step_4.style.background = ''
    num_step_3.style.background = '#bde1fc'
})

