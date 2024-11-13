const stars1 = document.getElementById('stars1').querySelectorAll('.fa-star')
        const stars2 = document.getElementById('stars2').querySelectorAll('.fa-star')
        const color = ['#4CC9FE','#51C4D3', '#B0EBB4', '#09C6AB', '#B8FFD0','#4CC9FE','#D2E0FB','#B6FFFA', '#863A6F']

        const animation = ['animation-timing-function: cubic-bezier(.68,.25,.83,.67);', 'animation-timing-function: cubic-bezier(.68,.25,.41,.86);', 'animation-timing-function: cubic-bezier(.25,.62,.99,.56);']
        
        setInterval('fallStar(stars1)', 2500)
        setInterval('fallStar(stars2)', 2890)


        
        function fallStar(stars) {
            let i = Math.floor(Math.random()* stars.length)
            let c = Math.floor(Math.random()* color.length)
            let a = Math.floor(Math.random()* animation.length)
            stars[i].style = `color: ${color[c]}; animation-name: stars; ${animation[a]}`
            setTimeout(() => {
            stars[i].style = `animation: none`
                
            }, 2490);
        }

        let poetBox = document.querySelectorAll('.poet-box')
        poetBox.forEach(element => element.addEventListener('click', ()=> element.classList.toggle('box-shadow')) );
