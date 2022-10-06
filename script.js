const featuresBtn = document.getElementById('features');
const companyBtn = document.getElementById('company');
const dropdownFeatures = document.getElementById('feat');
const dropdownCompany = document.getElementById('com');
const arrow =document.getElementById('feat-arrow');
const arrow2 =document.getElementById('com-arrow');

featuresBtn.addEventListener('click', ()=>{
    dropdownFeatures.classList.toggle('active')
    if(dropdownFeatures.classList.contains('active')){
        arrow.src='./images/icon-arrow-up.svg';
    }
    else{
        arrow.src = './images/icon-arrow-down.svg';
    }
})
companyBtn.addEventListener('click', ()=>{
    dropdownCompany.classList.toggle('active')
    if(dropdownCompany.classList.contains('active')){
        arrow2.src='./images/icon-arrow-up.svg';
    }
    else{
        arrow2.src = './images/icon-arrow-down.svg';
    }
})

const menuBtn = document.getElementById('ham');
menuBtn.addEventListener('click',()=>{
       
       
        document.getElementById('nav').classList.toggle('navbar-extra');
        document.getElementById('logo').classList.toggle('brand-name-extra');
        document.getElementById('navi').classList.toggle('navigation-extra');
        document.getElementById('btns').classList.toggle('login-reg-btn-extra');
        document.getElementById('log').classList.toggle('login-extra');
        document.getElementById('reg').classList.toggle('register-extra');
        menuBtn.classList.toggle('ham-extra')
        
        document.querySelectorAll('.toggle-btn').forEach(visible=>{
            visible.classList.toggle('toggle-btn-extra');
            if(visible.id==='features'){
                visible.addEventListener('click',()=>{
                    dropdownFeatures.classList.toggle('active-for-mobile');
                })
            }
            else{
                visible.addEventListener('click',()=>{
                    dropdownCompany.classList.toggle('active-for-mobile');
                })
            }

        })
        
        document.querySelectorAll('.text').forEach(visible=>{
            visible.classList.toggle('text-extra');
        })

        if(menuBtn.classList.contains('ham-extra')){
            menuBtn.src= './images/icon-close-menu.svg';
            document.getElementById('bg-black').classList.add('black');
            
        }
        else{
            menuBtn.src= './images/icon-menu.svg';
            document.getElementById('bg-black').classList.remove('black');
            
        }

        
        
       


})
