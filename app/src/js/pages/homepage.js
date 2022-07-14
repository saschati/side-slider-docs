import initCssEditor from '../heplers/codemirrorcss';
import initJsEditor from '../heplers/codemirrorjs';
import isVisible from '@saschati/side-slider/src/utils/is-visible';

import docsJs from '../docs/mirror/js/homepage.js';
import docsCss from '../docs/mirror/css/homepage.js';

import SideSlider from "@saschati/side-slider";
import Left from "@saschati/side-slider/src/chunk/side/left";
import nextAnimate from "@saschati/side-slider/src/animate/animation/next/twist";
import reverse from "@saschati/side-slider/src/animate/timing/reverse";
import linage from "@saschati/side-slider/src/animate/timing/linage";

window.addEventListener('load', function () {
    /**
     * Sidebar
     */
    if (document.documentElement.clientWidth > 1850) {
        (async () => {
            const {default: createSidebarThree} = await import("../module/sidebar-three");
            const {default: sidebarData} = await import("../data/sidebar/homepage");

            const sidebar = await createSidebarThree(sidebarData);
            const homepageSidebar = document.createElement('div');

            homepageSidebar.classList.add('homepage__sidebar', 'scrollbar');
            homepageSidebar.append(sidebar);

            const container = document.querySelector('.homepage__container');

            container.prepend(homepageSidebar);
        })();
    }

    /**
     * Js Codemirror
     */
    for (const elem of document.querySelectorAll('.js-mirror-js')) {
        initJsEditor(elem, docsJs[elem.dataset.mirror]);
    }

    /**
     * Css Codemirror
     */
    for (const elem of document.querySelectorAll('.js-mirror-css')) {
        initCssEditor(elem, docsCss[elem.dataset.mirror]);
    }

    /**
     * Glory to Ukraine
     */
    {
        const slider = new SideSlider({
            wrapper: document.querySelector('.js-side-slider--glory-ukraine'),
            options: {
                autoplay: {
                    duration: 3000,
                    delay: 1500,
                    chain: false,
                },
                next: {
                    animates: nextAnimate,
                    optimize: false,
                },
                optimize: false,
            }
        });

        slider.boot();
    }

    const sideSliderActions = [
        'install',
        'left',
        'reverse',
        'chain',
        'flexibleClick',
        'SpeedUp_active',
        'SpeedUp_forceNext',
        'animations_function',
        'animations_array',
    ];

    let homepageTicking = false;

    const homepageAbort = new AbortController();

    document.addEventListener('scroll', function () {
        if (sideSliderActions.length === 0) {
            homepageAbort.abort();
        }

        if (homepageTicking === true) {
            return;
        }

        requestAnimationFrame(() => {
            /**
             * Install
             */
            if (sideSliderActions.includes('install') === true) {
                const wrapper = document.querySelector('.js-side-slider--right');

                if (wrapper !== null && isVisible(wrapper) === true) {
                    sideSliderActions.splice(sideSliderActions.indexOf('install'), 1);

                    const slider = new SideSlider({
                        wrapper: document.querySelector('.js-side-slider--right'),
                        options: {
                            autoplay: {
                                duration: 3000,
                                delay: 1500,
                            },
                            next: {
                                optimize: false,
                            }
                        }
                    });

                    slider.boot();
                }
            }

            /**
             * Left
             */
            if (sideSliderActions.includes('left') === true) {
                const wrapper = document.querySelector('.js-side-slider--left');

                if (wrapper !== null && isVisible(wrapper) === true) {
                    sideSliderActions.splice(sideSliderActions.indexOf('left'), 1);

                    const slider = new SideSlider({
                        wrapper: wrapper,
                        direction: Left,
                        options: {
                            autoplay: {
                                duration: 3000,
                                delay: 1500,
                            },
                            next: {
                                optimize: false,
                            }
                        }
                    });

                    slider.boot();
                }
            }

            /**
             * Reverse
             */
            if (sideSliderActions.includes('reverse') === true) {
                const wrapper = document.querySelector('.js-side-slider--reverse');

                if (wrapper !== null && isVisible(wrapper) === true) {
                    sideSliderActions.splice(sideSliderActions.indexOf('reverse'), 1);

                    const slider = new SideSlider({
                        wrapper: wrapper,
                        options: {
                            autoplay: {
                                duration: 2000,
                                delay: 1000,
                                reverse: true,
                            },
                            next: {
                                optimize: false,
                            }
                        }
                    });

                    slider.boot();
                }
            }

            /**
             * Chain
             */
            if (sideSliderActions.includes('chain') === true) {
                const wrapper = document.querySelector('.js-side-slider--chain');

                if (wrapper !== null && isVisible(wrapper) === true) {
                    sideSliderActions.splice(sideSliderActions.indexOf('chain'), 1);

                    const slider = new SideSlider({
                        wrapper: wrapper,
                        options: {
                            autoplay: {
                                duration: 2000,
                                delay: 1000,
                                chain: false,
                            },
                            next: {
                                optimize: false,
                            }
                        }
                    });

                    slider.boot();
                }
            }

            /**
             * flexibleClick
             */
            if (sideSliderActions.includes('flexibleClick') === true) {
                const wrapper = document.querySelector('.js-side-slider--flexibleClick');

                if (wrapper !== null && isVisible(wrapper) === true) {
                    sideSliderActions.splice(sideSliderActions.indexOf('flexibleClick'), 1);

                    const prev = document.querySelector('.js-side-slider--flexibleClick-btn_prev');
                    const next = document.querySelector('.js-side-slider--flexibleClick-btn_next');

                    const slider = new SideSlider({
                        wrapper: wrapper,
                        options: {
                            autoplay: {
                                active: false,
                            },
                            client: {
                                delay: 375,
                                chain: false,
                                prevent: false,
                                button: {
                                    prev,
                                    next,
                                }
                            },
                            next: {
                                optimize: false,
                            }
                        }
                    });

                    slider.boot();
                }
            }

            /**
             * SpeedUp active
             */
            if (sideSliderActions.includes('SpeedUp_active') === true) {
                const wrapper = document.querySelector('.js-side-slider--speedUp-active');

                if (wrapper !== null && isVisible(wrapper) === true) {
                    sideSliderActions.splice(sideSliderActions.indexOf('SpeedUp_active'), 1);

                    const prev = document.querySelector('.js-side-slider--speedUp-active-btn_prev');
                    const next = document.querySelector('.js-side-slider--speedUp-active-btn_next');

                    const slider = new SideSlider({
                        wrapper: wrapper,
                        options: {
                            autoplay: {
                                duration: 10000,
                                calculateDelayFromOther: true,
                                chain: false,
                                delayedStart: {
                                    disabled: false,
                                    delay: 3000,
                                },
                            },
                            client: {
                                delay: 375,
                                chain: false,
                                button: {
                                    prev,
                                    next,
                                }
                            },
                            next: {
                                optimize: false,
                            }
                        }
                    });

                    slider.boot();
                }
            }

            /**
             * SpeedUp forceNext
             */
            if (sideSliderActions.includes('SpeedUp_forceNext') === true) {
                const wrapper = document.querySelector('.js-side-slider--speedUp-forceNext');

                if (wrapper !== null && isVisible(wrapper) === true) {
                    sideSliderActions.splice(sideSliderActions.indexOf('SpeedUp_forceNext'), 1);

                    const prev = document.querySelector('.js-side-slider--speedUp-forceNext-btn_prev');
                    const next = document.querySelector('.js-side-slider--speedUp-forceNext-btn_next');

                    const slider = new SideSlider({
                        wrapper: wrapper,
                        options: {
                            autoplay: {
                                duration: 10000,
                                calculateDelayFromOther: true,
                                chain: false,
                                delayedStart: {
                                    disabled: false,
                                    delay: 3000,
                                },
                            },
                            client: {
                                delay: 375,
                                chain: false,
                                speedUp: {
                                    active: true,
                                    forceNext: false,
                                },
                                button: {
                                    prev,
                                    next,
                                }
                            },
                            next: {
                                optimize: false,
                            }
                        }
                    });

                    slider.boot();
                }
            }

            /**
             * Animations function
             */
            if (sideSliderActions.includes('animations_function') === true) {
                const wrapper = document.querySelector('.js-side-slider--animations_function');

                if (wrapper !== null && isVisible(wrapper) === true) {
                    sideSliderActions.splice(sideSliderActions.indexOf('animations_function'), 1);

                    const prev = document.querySelector('.js-side-slider--animations_function-btn_prev');
                    const next = document.querySelector('.js-side-slider--animations_function-btn_next');

                    const slider = new SideSlider({
                        wrapper: wrapper,
                        options: {
                            autoplay: {
                                duration: 3000,
                                delay: 1500,
                                chain: true,
                            },
                            runner: {
                                animates: function (info, progress) {
                                    const x = (progress * 300) - info.getReverseFinishedPosition();
                                    const y = (progress * 300);

                                    info.getCurrent().style.transform = `translate(-${x}px, ${y}px)`;
                                }
                            },
                            client: {
                                chain: true,
                                calculateDelayFromOther: true,
                                button: {
                                    prev,
                                    next,
                                }
                            },
                            next: {
                                optimize: false,
                            }
                        }
                    });

                    slider.boot();
                }
            }

            /**
             * Animations array
             */
            if (sideSliderActions.includes('animations_array') === true) {
                const wrapper = document.querySelector('.js-side-slider--animations_array');

                if (wrapper !== null && isVisible(wrapper) === true) {
                    sideSliderActions.splice(sideSliderActions.indexOf('animations_array'), 1);

                    const prev = document.querySelector('.js-side-slider--animations_array-btn_prev');
                    const next = document.querySelector('.js-side-slider--animations_array-btn_next');

                    const slider = new SideSlider({
                        wrapper: wrapper,
                        options: {
                            autoplay: {
                                duration: 3000,
                                delay: 1500,
                                chain: true,
                            },
                            next: {
                                optimize: false,
                                animates: [
                                    {
                                        progress: 33.33,
                                        draw: function (info, progress) {
                                            const y = (progress * 200);

                                            info.getCurrent().style.transform = `translate(0, ${y}px)`;
                                        }
                                    },
                                    {
                                        progress: 66.66,
                                        draw: function (info, progress) {
                                            const x = (progress * info.getSiblingDistance());

                                            info.getCurrent().style.transform = `translate(${x}px, 200px)`;
                                        }
                                    },
                                    {
                                        progress: 100,
                                        timing: reverse(linage),
                                        draw: function (info, progress) {
                                            const x = info.getSiblingDistance();
                                            const y = (progress * 200);

                                            info.getCurrent().style.transform = `translate(${x}px, ${y}px)`;
                                        }
                                    },
                                ],
                            },
                            client: {
                                chain: true,
                                calculateDelayFromOther: true,
                                button: {
                                    prev,
                                    next,
                                }
                            }
                        }
                    });

                    slider.boot();
                }
            }

            homepageTicking = false;
        });

        homepageTicking = true;

    }, {passive: true, signal: homepageAbort.signal});

    /**
     * Advanced
     */
    {
        const prev = document.querySelector('.js-side-slider--advanced-btn_prev');
        const next = document.querySelector('.js-side-slider--advanced-btn_next');

        const runnerAnimates = [
            'cast-out',
            'down',
            'hide',
            'left',
            'right',
            'scale',
            'tornado',
            'up',
            'fly',
        ];

        const runnerAbort = new AbortController();

        let runnerTicking = false;
        document.addEventListener('scroll', function (e) {
            if (runnerAnimates.length === 0) {
                runnerAbort.abort();

                return;
            }

            if (runnerTicking === true) {
                return;
            }

            requestAnimationFrame(() => {
                runnerAnimates.forEach((name, index) => {
                    const wrapper = document.querySelector(`.js-side-slider--advanced_${name}`);

                    if (wrapper === null || isVisible(wrapper) === false) {
                        return;
                    }

                    import(`@saschati/side-slider/src/animate/animation/runner/${name}`)
                        .then(function ({default: animate}) {
                            if (name === 'cast-out') {
                                animate = animate(false);
                            } else if (name === 'fly') {
                                animate = animate(true);
                            }

                            const slider = new SideSlider({
                                wrapper: wrapper,
                                options: {
                                    autoplay: {
                                        duration: 3000,
                                        delay: 1500,
                                    },
                                    runner: {
                                        animates: animate,
                                    },
                                    next: {
                                        optimize: false,
                                    },
                                    client: {
                                        calculateDelayFromOther: true,
                                        button: {
                                            prev,
                                            next,
                                        },
                                    },
                                }
                            });

                            slider.boot();
                        });

                    runnerAnimates.splice(index, 1);
                });

                runnerTicking = false;
            });
            runnerTicking = true;
        }, {passive: true, signal: runnerAbort.signal});


        const nextAnimates = [
            'hide',
            'run',
            'scale',
            'twist',
        ];

        const nextAbort = new AbortController();

        let nextTick = false;
        document.addEventListener('scroll', function (e) {
            if (nextAnimates.length === 0) {
                nextAbort.abort();

                return;
            }

            if (nextTick === true) {
                return;
            }

            requestAnimationFrame(() => {
                nextAnimates.forEach((name, index) => {
                    const wrapper = document.querySelector(`.js-side-slider--advanced_next_${name}`);

                    if (wrapper === null || isVisible(wrapper) === false) {
                        return;
                    }

                    import(`@saschati/side-slider/src/animate/animation/next/${name}`)
                        .then(function ({default: animate}) {
                            const slider = new SideSlider({
                                wrapper: wrapper,
                                options: {
                                    autoplay: {
                                        duration: 3000,
                                        delay: 1500,
                                    },
                                    next: {
                                        animates: animate,
                                    },
                                    client: {
                                        calculateDelayFromOther: true,
                                        button: {
                                            prev,
                                            next,
                                        },
                                    },
                                }
                            });

                            slider.boot();
                        });

                    nextAnimates.splice(index, 1);
                });

                nextTick = false;
            })

            nextTick = true;
        }, {passive: true, signal: nextAbort.signal});
    }
});