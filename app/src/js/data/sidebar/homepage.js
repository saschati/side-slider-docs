export default [
    {
        name: 'What it is?',
        link: '#what-it-is',
    },
    {
        name: 'Before use',
        link: '#before-use',
    },
    {
        name: 'Install',
        link: '#install',
    },
    {
        name: 'Usage',
        link: '#usage',
    },
    {
        name: 'Advanced',
        link: '#advanced',
        children: [
            {
                name: 'runner',
                link: '#advanced-runner',
                children: [
                    {
                        name: 'cast-out',
                        link: '#advanced-runner-cast-out',
                    },
                    {
                        name: 'down',
                        link: '#advanced-runner-down',
                    },
                    {
                        name: 'hide',
                        link: '#advanced-runner-hide',
                    },
                    {
                        name: 'left',
                        link: '#advanced-runner-left',
                    },
                    {
                        name: 'right',
                        link: '#advanced-runner-right',
                    },
                    {
                        name: 'scale',
                        link: '#advanced-runner-scale',
                    },
                    {
                        name: 'tornado',
                        link: '#advanced-runner-tornado',
                    },
                    {
                        name: 'up',
                        link: '#advanced-runner-up',
                    },
                    {
                        name: 'fly',
                        link: '#advanced-runner-fly',
                    },
                ],
            },
            {
                name: 'next',
                link: '#advanced-next',
                children: [
                    {
                        name: 'hide',
                        link: '#advanced-next-hide',
                    },
                    {
                        name: 'run',
                        link: '#advanced-next-run',
                    },
                    {
                        name: 'scale',
                        link: '#advanced-next-scale',
                    },
                    {
                        name: 'twist',
                        link: '#advanced-next-twist',
                    },
                ],
            }
        ],
    },
    {
        name: 'Documentation',
        link: '#docs',
        children: [
            {
                name: 'Property',
                link: '#docs-property',
                children: [
                    {
                        name: 'wrapper',
                        link: '#docs-property-wrapper',
                    },
                    {
                        name: 'direction',
                        link: '#docs-property-direction',
                    },
                    {
                        name: 'options',
                        link: '#docs-property-options-autoplay',
                        children: [
                            {
                                name: 'autoplay',
                                link: '#docs-property-options-autoplay',
                                children: [
                                    {
                                        name: 'active',
                                        link: '#docs-property-options-autoplay-active',
                                    },
                                    {
                                        name: 'reverse',
                                        link: '#docs-property-options-autoplay-reverse',
                                    },
                                    {
                                        name: 'duration',
                                        link: '#docs-property-options-autoplay-duration',
                                    },
                                    {
                                        name: 'delay',
                                        link: '#docs-property-options-autoplay-delay',
                                    },
                                    {
                                        name: 'calculateDelayFromOther',
                                        link: '#docs-property-options-autoplay-calculateDelayFromOther',
                                    },
                                    {
                                        name: 'chain',
                                        link: '#docs-property-options-autoplay-chain',
                                    },
                                    {
                                        name: 'delayedStart',
                                        link: '#docs-property-options-autoplay-delayedStart',
                                        children: [
                                            {
                                                name: 'disabled',
                                                link: '#docs-property-options-autoplay-delayedStart-disabled',
                                            },
                                            {
                                                name: 'delay',
                                                link: '#docs-property-options-autoplay-delayedStart-delay',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: 'runner',
                                link: '#docs-property-options-runner',
                                children: [
                                    {
                                        name: 'wait',
                                        link: '#docs-property-options-runner-wait',
                                    },
                                    {
                                        name: 'animates',
                                        link: '#docs-property-options-runner-animates',
                                    },
                                ],
                            },
                            {
                                name: 'next',
                                link: '#docs-property-options-next',
                                children: [
                                    {
                                        name: 'visible',
                                        link: '#docs-property-options-next-visible',
                                    },
                                    {
                                        name: 'optimize',
                                        link: '#docs-property-options-next-optimize',
                                    },
                                    {
                                        name: 'animates',
                                        link: '#docs-property-options-next-animates',
                                    },
                                ],
                            },
                            {
                                name: 'client',
                                link: '#docs-property-options-client',
                                children: [
                                    {
                                        name: 'duration',
                                        link: '#docs-property-options-client-duration',
                                    },
                                    {
                                        name: 'delay',
                                        link: '#docs-property-options-client-delay',
                                    },
                                    {
                                        name: 'calculateDelayFromOther',
                                        link: '#docs-property-options-client-calculateDelayFromOther',
                                    },
                                    {
                                        name: 'chain',
                                        link: '#docs-property-options-client-chain',
                                    },
                                    {
                                        name: 'flexibleClick',
                                        link: '#docs-property-options-client-flexibleClick',
                                    },
                                    {
                                        name: 'minDuration',
                                        link: '#docs-property-options-client-minDuration',
                                    },
                                    {
                                        name: 'prevent',
                                        link: '#docs-property-options-client-prevent',
                                    },
                                    {
                                        name: 'button',
                                        link: '#docs-property-options-client-button',
                                        children: [
                                            {
                                                name: 'prev',
                                                link: '#docs-property-options-client-button-prev',
                                            },
                                            {
                                                name: 'next',
                                                link: '#docs-property-options-client-button-next',
                                            },
                                        ],
                                    },
                                    {
                                        name: 'speedUp',
                                        link: '#docs-property-options-client-speedUp',
                                        children: [
                                            {
                                                name: 'active',
                                                link: '#docs-property-options-client-speedUp-active',
                                            },
                                            {
                                                name: 'forceNext',
                                                link: '#docs-property-options-client-speedUp-forceNext',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: 'mutation',
                                link: '#docs-property-options-mutation',
                                children: [
                                    {
                                        name: 'onRun',
                                        link: '#docs-property-options-mutation-onRun',
                                    },
                                    {
                                        name: 'onDone',
                                        link: '#docs-property-options-mutation-onDone',
                                    },
                                    {
                                        name: 'onActive',
                                        link: '#docs-property-options-mutation-onActive',
                                    },
                                    {
                                        name: 'onUnActive',
                                        link: '#docs-property-options-mutation-onUnActive',
                                    },
                                    {
                                        name: 'onVisible',
                                        link: '#docs-property-options-mutation-onVisible',
                                    },
                                    {
                                        name: 'onUnVisible',
                                        link: '#docs-property-options-mutation-onUnVisible',
                                    },
                                    {
                                        name: 'onSwitched',
                                        link: '#docs-property-options-mutation-onSwitched',
                                    },
                                    {
                                        name: 'onClickStart',
                                        link: '#docs-property-options-mutation-onClickStart',
                                    },
                                    {
                                        name: 'onClickFlushed',
                                        link: '#docs-property-options-mutation-onClickFlushed',
                                    },
                                ],
                            },
                            {
                                name: 'timing',
                                link: '#docs-property-options-timing',
                            },
                            {
                                name: 'reverse',
                                link: '#docs-property-options-reverse',
                            },
                            {
                                name: 'animate',
                                link: '#docs-property-options-animate',
                            },
                            {
                                name: 'optimize',
                                link: '#docs-property-options-optimize',
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Methods',
                link: '#docs-methods',
                children: [
                    {
                        name: 'boot()',
                        link: '#docs-methods-boot',
                    },
                    {
                        name: 'triggerClientClick()',
                        link: '#docs-methods-triggerClientClick',
                    },
                    {
                        name: 'triggerAutoplay()',
                        link: '#docs-methods-triggerAutoplay',
                    },
                    {
                        name: 'stopAutoplay()',
                        link: '#docs-methods-stopAutoplay',
                    },
                    {
                        name: 'delayedAutoplay()',
                        link: '#docs-methods-delayedAutoplay',
                    },
                ],
            },
        ],
    },
    {
        name: 'API',
        link: '#api',
        children: [
            {
                name: 'Animations',
                link: '#api-animations',
                children: [
                    {
                        name: 'function',
                        link: '#api-animations-function',
                        children: [
                            {
                                name: 'RunnerInfo',
                                link: '#api-animations-function-runner',
                            },
                            {
                                name: 'NextInfo',
                                link: '#api-animations-function-next',
                            },
                        ],
                    },
                    {
                        name: 'Array',
                        link: '#api-animations-array',
                    }
                ]
            }
        ],
    },
    {
        name: 'Styling tips',
        link: '#styling-tips',
    },
    {
        name: 'Also',
        link: '#also',
    },
];