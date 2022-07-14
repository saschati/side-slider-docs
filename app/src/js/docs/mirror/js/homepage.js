export default {
    install: `npm i @saschati/side-slider`,

    usage: `import SideSlider from "@saschati/side-slider";

// This event is required for the plugin to work correctly
window.addEventListener('load', function () {
   // By default, the slider moves to the right
   const slider = new SideSlider({wrapper: document.querySelector('.js-side-slider')});

   slider.boot();
});`,

    advanced: `import SideSlider from "@saschati/side-slider";
// Animate class
import Animate from "@saschati/src/animate/animate";
// Animations runner
import runnerCaseOut from "@saschati/side-slider/src/animate/animation/runner/cast-out";
import runnerDown from "@saschati/side-slider/src/animate/animation/runner/down";
import runnerFly from "@saschati/side-slider/src/animate/animation/runner/fly";
import runnerHide from "@saschati/side-slider/src/animate/animation/runner/hide";
import runnerLeft from "@saschati/side-slider/src/animate/animation/runner/left";
import runnerRight from "@saschati/side-slider/src/animate/animation/runner/right";
import runnerScale from "@saschati/side-slider/src/animate/animation/runner/scale";
import runnerTornado from "@saschati/side-slider/src/animate/animation/runner/tornado";
import runnerUp from "@saschati/side-slider/src/animate/animation/runner/up";
// Animation next
import nextHide from "@saschati/side-slider/src/animate/animation/next/hide";
import nextRun from "@saschati/side-slider/src/animate/animation/next/run";
import nextScale from "@saschati/side-slider/src/animate/animation/next/scale";
import nextTwist from "@saschati/side-slider/src/animate/animation/next/twist";
// Timing function
import linage from "@saschati/side-slider/src/animate/timing/linage";
import reverse from "@saschati/side-slider/src/animate/timing/reverse";
// Direction slider
import Left from "@saschati/side-slider/src/chunk/side/left";

window.addEventListener('load', function () {
    const elem = document.querySelector('.side-slider');

    const prev = document.querySelector('.side_prev');
    const next = document.querySelector('.side_next');

    const slider = new SideSlider({
        wrapper: elem,
        // direction: Left,
        options: {
            // Autoplay field
            autoplay: {
                // Determines whether to start autoplay when the plugin is loaded
                active: true,
                // Defines the direction in which autoplay should act by default from the first element to the end
                reverse: false,
                // Determines the speed of change of the element in autoplay
                duration: 3000,
                // Delay for neighboring elements before taking the place of the change element
                delay: 0,
                // Determines whether to count the delay from the user's click option
                calculateDelayFromOther: false,
                // As the elements should shift by default each element separately, the time after the delay is divided between
                chain: true,
                // Option to pause autoplay after last click
                delayedStart: {
                    // Whether to stop forever when one of the buttons was clicked
                    disabled: false,
                    // Timeout for a new autoplay start after the last click
                    delay: 10000,
                },
            },
            // Options for the element that should be hidden and placed at the end/beginning according to the direction
            runner: {
                // A delay for the entire loop so that the animation ends before the parent element changes loop
                wait: 100,
                // Animation of hiding an element
                animates: runnerHide, // runnerDown | runnerCaseOut(true|false) | runnerFly(true|false) | runnerHide | runnerLeft | runnerRight | runnerScale | runnerTornado | runnerUp
            },
            // Options of adjacent elements that make the ribbon move
            next: {
                // The number of visible elements of the tape to divide the time between them if the option chain=true, calculated automatically by default
                visible: null,
                // Optimize the switching process by performing it only when the user sees it, only for next items
                optimize: true,
                // Animation of displacement of adjacent elements for the movement of the tape
                animates: nextRun, // nextHide | nextRun | nextScale | nextTwist
            },
            // Client click options
            client: {
                // Determines the speed of change of the element in autoplay
                duration: 750,
                // Defines the minimum speed at which autoplay can work
                minDuration: 250,
                // Delay for neighboring elements before taking the place of the change element
                delay: 0,
                // Determines whether to calculate delay from the autoplay option
                calculateDelayFromOther: false,
                // As the elements should shift by default each element separately, the time after the delay is divided between prominent elements
                chain: true,
                // This field determines whether the playback speed will be calculated according to the speed of pressing the buttons
                flexibleClick: true,
                // Indicates that there can be only one animation per click, otherwise clicks will accumulate, and release until the pressure is stopped or the other side of the change is chosen
                prevent: true,
                // Specifies whether to speed up the animation
                speedUp: {
                    // If the value is active, then when you click, the autoplay animation will accelerate to the speed of the click, otherwise, the click will start only after the autoplay animation ends
                    active: true,
                    // Specifies whether, when clicking on the scroll button, autoplay should also perform a click after acceleration is complete otherwise, the first click will simply accelerate the autoplay animation itself to its completion
                    forceNext: true,
                },
                // Ribbon controls object from the client
                button: {
                    // Control button for reverse change
                    prev: prev,
                    // Control button for scrolling
                    next: next,
                },
            },
            // A mutation object that is responsible for customizing an element on pseudo events
            mutation: {
                // Mutation when moving an element to/from the end
                onRun: null,
                // Mutation at the end of the movement of the element to/from the end
                onDone: null,
                // A mutation for an existing active element that is considered the first in the list
                onActive: null,
                // Mutation when the element ceases to be the first and goes to the onRun mutation
                onUnActive: null,
                // Mutation when the element appears in the user's field of view
                onVisible: null,
                // Mutation when the element disappears from the user's field of view
                onUnVisible: null,
                // Mutation when a path was traversed by one element and it switched
                onSwitched: null,

                // Mutation for the control element when pressed and starting the animation
                onClickStart: null,
                // Mutation for a control element when a path has been traversed by one element and it has switched
                onClickFlushed: null,
            },
            // Time function
            timing: linage,
            // Reversible time function
            reverse: reverse,
            // A class for working with animations
            animate: Animate,
            // Optimize the switching process by performing it only when the user sees it
            optimize: true,
        }
    });
    
    // Downloading the configuration and preparing the plugin to work
    slider.boot();
    // Change the slide change according to the client click settings
    slider.triggerClientClick(true);
    // Start autoplay accordingly
    slider.triggerAutoplay(true);
    // Stop autoplay
    slider.stopAutoplay();
    // Delay autoplay according to autoplay settings
    slider.delayedAutoplay();
});`,

    docs_property_wrapper: `import SideSlider from "@saschati/side-slider";

const slider = new SideSlider({
    ...
    wrapper: document.querySelector('.js-side-slider'), 
    ...
});`,

    docs_property_direction: `import SideSlider from "@saschati/side-slider";
    
import Right from "@saschati/side-slider/src/chunk/side/right";
import Left from "@saschati/side-slider/src/chunk/side/left";

const slider = new SideSlider({
    ...
    direction: Left, // Left | Right
    ...
});`,

    docs_property_options_autoplay: `import SideSlider from "@saschati/side-slider";

const slider = new SideSlider({
    ...
    options: {
        // Autoplay field
        autoplay: {
            // Determines whether to start autoplay when the plugin is loaded
            active: true,
            // Defines the direction in which autoplay should act by default from the first element to the end
            reverse: false,
            // Determines the speed of change of the element in autoplay
            duration: 3000,
            // Delay for neighboring elements before taking the place of the change element
            delay: 0,
            // Determines whether to count the delay from the user's click option
            calculateDelayFromOther: false,
            // As the elements should shift by default each element separately, the time after the delay is divided between
            chain: true,
            // Option to pause autoplay after last click
            delayedStart: {
                // Whether to stop forever when one of the buttons was clicked
                disabled: false,
                // Timeout for a new autoplay start after the last click
                delay: 10000,
            },
        },
    }
    ...
});`,

    docs_property_options_runner: `import SideSlider from "@saschati/side-slider";
    
import runnerCaseOut from "@saschati/side-slider/src/animate/animation/runner/cast-out";
import runnerDown from "@saschati/side-slider/src/animate/animation/runner/down";
import runnerFly from "@saschati/side-slider/src/animate/animation/runner/fly";
import runnerHide from "@saschati/side-slider/src/animate/animation/runner/hide";
import runnerLeft from "@saschati/side-slider/src/animate/animation/runner/left";
import runnerRight from "@saschati/side-slider/src/animate/animation/runner/right";
import runnerScale from "@saschati/side-slider/src/animate/animation/runner/scale";
import runnerTornado from "@saschati/side-slider/src/animate/animation/runner/tornado";
import runnerUp from "@saschati/side-slider/src/animate/animation/runner/up";

const slider = new SideSlider({
    ...
    options: {
        runner: {
            // A delay for the entire loop so that the animation ends before the parent element changes loop
            wait: 100,
            // Animation of hiding an element
            animates: runnerHide, // runnerDown | runnerCaseOut(true|false) | runnerFly(true|false) | runnerHide | runnerLeft | runnerRight | runnerScale | runnerTornado | runnerUp
        },
    }
    ...
});`,

    docs_property_options_next: `import SideSlider from "@saschati/side-slider";
    
import nextHide from "@saschati/side-slider/src/animate/animation/next/hide";
import nextRun from "@saschati/side-slider/src/animate/animation/next/run";
import nextScale from "@saschati/side-slider/src/animate/animation/next/scale";
import nextTwist from "@saschati/side-slider/src/animate/animation/next/twist";

const slider = new SideSlider({
    ...
    options: {
        next: {
            // The number of visible elements of the tape to divide the time between them if the option chain=true, calculated automatically by default
            visible: null,
            // Optimize the switching process by performing it only when the user sees it, only for next items
            optimize: true,
            // Animation of displacement of adjacent elements for the movement of the tape
            animates: nextRun, // nextHide | nextRun | nextScale | nextTwist
        },
    }
    ...
});`,

    docs_property_options_client: `import SideSlider from "@saschati/side-slider";

const slider = new SideSlider({
    ...
    options: {
        client: {
            // Determines the speed of change of the element in autoplay
            duration: 750,
            // Defines the minimum speed at which autoplay can work
            minDuration: 250,
            // Delay for neighboring elements before taking the place of the change element
            delay: 0,
            // Determines whether to calculate delay from the autoplay option
            calculateDelayFromOther: false,
            // As the elements should shift by default each element separately, the time after the delay is divided between prominent elements
            chain: true,
            // This field determines whether the playback speed will be calculated according to the speed of pressing the buttons
            flexibleClick: true,
            // Indicates that there can be only one animation per click, otherwise clicks will accumulate, and release until the pressure is stopped or the other side of the change is chosen
            prevent: true,
            // Specifies whether to speed up the animation
            speedUp: {
                // If the value is active, then when you click, the autoplay animation will accelerate to the speed of the click, otherwise, the click will start only after the autoplay animation ends
                active: true,
                // Specifies whether, when clicking on the scroll button, autoplay should also perform a click after acceleration is complete otherwise, the first click will simply accelerate the autoplay animation itself to its completion
                forceNext: true,
            },
            // Ribbon controls object from the client
            button: {
                // Control button for reverse change
                prev: prev,
                // Control button for scrolling
                next: next,
            },
        },
    }
    ...
});`,

    docs_property_options_mutation: `import SideSlider from "@saschati/side-slider";

const slider = new SideSlider({
    ...
    options: {
        mutation: {
            // Mutation when moving an element to/from the end
            onRun: function (item) {
                item.classList.add('is-runner');
            },
            // Mutation at the end of the movement of the element to/from the end
            onDone: function (item) {
                item.classList.remove('is-runner');
            },
            // A mutation for an existing active element that is considered the first in the list
            onActive: function (item) {
                item.classList.add('is-active');
            },
            // Mutation when the element ceases to be the first and goes to the onRun mutation
            onUnActive: function (item) {
                item.classList.remove('is-active');
            },
            // Mutation when the element appears in the user's field of view
            onVisible: function (item) {
                item.classList.add('is-visible');
            },
            // Mutation when the element disappears from the user's field of view
            onUnVisible: function (item) {
                item.classList.remove('is-visible');
            },
            // Mutation when a path was traversed by one element and it switched
            onSwitched: function (item) {
                item.removeAttribute('style');
            },
    
            // Mutation for the control element when pressed and starting the animation
            onClickStart: function (item) {
                item.classList.add('is-click');
            },
            // Mutation for a control element when a path has been traversed by one element and it has switched
            onClickFlushed: function (item) {
                item.classList.remove('is-click');
            },
        },
    }
    ...
});`,

    docs_property_options_timing: `import SideSlider from "@saschati/side-slider";
    
import linage from "@saschati/side-slider/src/animate/timing/linage";

const slider = new SideSlider({
    ...
    options: {
        // Time function
        timing: linage,
    },
    ...
});`,

    docs_property_options_reverse: `import SideSlider from "@saschati/side-slider";

import reverse from "@saschati/side-slider/src/animate/timing/reverse";

const slider = new SideSlider({
    ...
    options: {
        // Reversible time function
        reverse: reverse,
    },
    ...
});`,

    docs_property_options_animate: `import SideSlider from "@saschati/side-slider";

import Animate from "@saschati/src/animate/animate";

const slider = new SideSlider({
    ...
    options: {
        // A class for working with animations
        animate: Animate,
    },
    ...
});`,

    docs_property_options_optimize: `import SideSlider from "@saschati/side-slider";

import Animate from "@saschati/src/animate/animate";

const slider = new SideSlider({
    ...
    options: {
        // Optimize the switching process by performing it only when the user sees it
        optimize: true,
    },
    ...
});`,

    docs_methods_boot: `import SideSlider from "@saschati/side-slider";

const slider = new SideSlider({...});

// Downloading the configuration and preparing the plugin to work
slider.boot();
`,

    docs_methods_triggerClientClick: `import SideSlider from "@saschati/side-slider";

const slider = new SideSlider({...});

// Change the slide change according to the client click settings
slider.triggerClientClick(true);
`,

    docs_methods_triggerAutoplay: `import SideSlider from "@saschati/side-slider";

const slider = new SideSlider({...});

// Start autoplay accordingly
slider.triggerAutoplay(true);
`,

    docs_methods_stopAutoplay: `import SideSlider from "@saschati/side-slider";

const slider = new SideSlider({...});

// Stop autoplay
slider.stopAutoplay();
`,

    docs_methods_delayedAutoplay: `import SideSlider from "@saschati/side-slider";

const slider = new SideSlider({...});

// Delay autoplay according to autoplay settings
slider.delayedAutoplay();
`,

    api_animations_function: `import SideSlider from "@saschati/side-slider";

const slider = new SideSlider({
    options: {
        runner: {
            animates: function (info, progress) {
                // info.getReverseFinishedPosition() very important function that returns the end position for the element.
                const x = (progress * 300) - info.getReverseFinishedPosition();
                const y = (progress * 300);

                info.getCurrent().style.transform = \`translate(-\${x}px, \${y}px)\`;
            }
        }
    }`,

    api_animations_array: `import SideSlider from "@saschati/side-slider";
    
import linage from "@saschati/side-slider/src/animate/timing/linage";
import reverse from "@saschati/side-slider/src/animate/timing/reverse";

const slider = new SideSlider({
    ...
    options: {
        next: {
            animates: [
                {
                    progress: 33.33,
                    draw: function (info, progress) {
                        const y = (progress * 200);

                        info.getCurrent().style.transform = \`translate(0, \${y}px)\`;
                    }
                },
                {
                    progress: 66.66,
                    draw: function (info, progress) {
                        // info.getSiblingDistance() very important function that returns the end position for the element.
                        const x = (progress * info.getSiblingDistance());

                        info.getCurrent().style.transform = \`translate(\${x}px, 200px)\`;
                    }
                },
                {
                    progress: 100,
                    // We pass the reversible time function that will count our traveled path from 1 to 0
                    timing: reverse(linage),
                    draw: function (info, progress) {
                        const x = info.getSiblingDistance();
                        const y = (progress * 200);

                        info.getCurrent().style.transform = \`translate(\${x}px, \${y}px)\`;
                    }
                },
            ],
        },
    }
    ...
});`,
};