const _$ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const workListElement = _$('.work__list')
const modalContent = _$('.modal__content')

// Hành vi khi scroll thì header đổi background
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()) {
            $('header').addClass('sticky')
        } else {
            $('header').removeClass('sticky')
        }
    })
})

const myWorks = {
    workLists:[
        {
            image: './assets/images/work_1.jpg',
            desc: 'The mist over the mountains'
        },
        {
            image: './assets/images/work_2.jpg',
            desc: 'Coffee beans'
        },
        {
            image: './assets/images/work_3.jpg',
            desc: 'Bear closeup'
        },
        {
            image: './assets/images/work_4.jpg',
            desc: 'Quiet ocean'
        },
        {
            image: './assets/images/work_5.jpg',
            desc: 'The mist'
        },
        {
            image: './assets/images/work_6.jpg',
            desc: 'My beloved typewriter'
        },
        {
            image: './assets/images/work_7.jpg',
            desc: 'Empty ghost train'
        },
        {
            image: './assets/images/work_8.jpg',
            desc: 'Sailing'
        }
    ],
    render: function(){
        const htmls = this.workLists.map((item,index) => {
            return `
            <div class="col l-3 m-3 c-12 mt-16" data-index = "${index}">
                <li class="work__list-item">
                    <img src="${item.image}" alt="" class="work__img">
                </li>
            </div>`
        })
        workListElement.innerHTML = htmls.join('')
    },
    clickImage: function(){
        const _this = this

        // Lắng nghe hành vi click vào work img hiển thị ra modal
        $$('.work__img').forEach((item,index) => {
            item.onclick = function(){
                $('.modal').addClass('modal--active')
                const htmls = 
                `<img src="${_this.workLists[index].image}" alt="" class="modal__work-img">
                <p class="modal__work-desc">${_this.workLists[index].desc}</p>`
                modalContent.innerHTML = htmls
            }
        })
    },
    closeImage: function(){
        // Đóng modal
        _$('.modal').onclick = function(){
            $('.modal').removeClass('modal--active')
        }
    },
    start: function(){
        myWorks.render()
        myWorks.clickImage()
        myWorks.closeImage()
    },
}

myWorks.start()


