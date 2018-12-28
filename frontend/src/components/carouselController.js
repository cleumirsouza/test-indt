let start = (data)=> {

    /**
     * Object that contain informations about the current state of the carousel.
     */
    let state = {
        items: data.recommendation,
        active: 0,
        direction: '',
        playActive: 0
    }

    /**
     * Method that handle event to right side.
     */
    moveRight = ()=> {
        if (state.playActive) pauseCarousel();
        moveCarousel('right');
    }
    
    /**
     * Method that handle event to left side.
     */
    moveLeft = ()=> {
        if (state.playActive) pauseCarousel();
        moveCarousel('left');
    }

    /**
     * Make carousel animate and move position to left or right
     */
    moveCarousel = (side)=> {
        let items = document.getElementsByClassName('item'), 
            i = 0, 
            currentItem = '',
            newActive = state.active;
            
        if(side === 'right') {
            state.active = (newActive + 1) % state.items.length;
            state.direction = 'right';
            
            for (i = 0; items.length > i; i++){
                currentItem = document.getElementsByClassName('item')[i];
                currentItem.classList.add('right-enter-active');
            } 
        } else {
            newActive--;
            state.active = newActive < 0 ? state.items.length - 1 : newActive;
            state.direction = 'left';
            
            for (i = 0; items.length > i; i++){
                currentItem = document.getElementsByClassName('item')[i];
                currentItem.classList.add('left-enter-active');
            } 
        }

        timerTransition = setTimeout(() => {
            carouselComponent();
            clearTimeout(timerTransition);
        }, 400);
    }

    /**
     * Component to create card.
     */
    bookComponent = ()=> {
        document.getElementById('book').innerHTML = '';
        let card = '';
        
        if (data.item) {
            card = templateCard(type.ITEM, data.item);
        }

        document.getElementById('book').insertAdjacentHTML('beforeend', card);
    }

    /**
     * Function to render carousel based in active item.
     */
    carouselComponent = ()=> {
        document.getElementById('carousel').innerHTML = '';
        let level, element = '';

        for (var i = state.active - 2; i < state.active + 3; i++) {
            var index = i;

            if (i < 0) {
                index = state.items.length + i;
            } else if (i >= state.items.length) {
                index = i % state.items.length;
            }

            level = state.active - i;
            element += templateCard(type.RECOMENDATION, data.recommendation[index], level);
        }

        let context = `<div id="items" class="noselect">
                <button class="arrow-left" onClick='moveLeft()'></button>
                    ${element}
                </div>
            </div>`;
    
        let root = document.getElementById('carousel');
        root.insertAdjacentHTML('beforeend', context);
        root.insertAdjacentHTML('beforeend', `<span class="blank-slash"><button class="arrow-right" onClick='moveRight()'></button></span>`);
    }

    // Renders only once by request.
    bookComponent();

    // Render only five cards by events in the carousel.
    carouselComponent();
}