/**
 * @param {string} name
 * @param {string} url
 *
 * @return {HTMLAnchorElement}
 */
function createLink(name, url) {
    const link = document.createElement('a');

    link.classList.add('sidebar-three__name');
    link.href = url;
    link.innerHTML = name;

    return link;
}

/**
 * @return {HTMLSpanElement}
 */
function createTrigger() {
    const trigger = document.createElement('span');

    trigger.classList.add('sidebar-three__trigger');
    trigger.innerHTML = '+';

    return trigger;
}

/**
 * <div class="sidebar-three">
 *     <span class="sidebar-three__line sidebar-three__line_mode_line"></span>
 *     <ul class="sidebar-three__items">
 *         <li class="sidebar-three__item">
 *             <a href="#what-it-is" class="sidebar-three__name">What it is?</a>
 *         </li>
 *         <li class="sidebar-three__item sidebar-three__item_type_three sidebar-three__item--open">
 *              <span class="sidebar-three__opener">
 *                  <a href="#api" class="sidebar-three__name">API</a>
 *                  <span class="sidebar-three__trigger">+</span>
 *              </span>
 *              <div class="sidebar-three sidebar-three_type_item">
 *                  <span class="sidebar-three__line"></span>
 *                  <ul class="sidebar-three__items">
 *                      <li class="sidebar-three__item">
 *                          <a href="#animations" class="sidebar-three__name">Animations</a>
 *                      </li>
 *                  </ul>
 *              </div>
 *          </li>
 *     </ul>
 * </div>
 *
 * items = [
 *     {
 *         name: 'What it is?',
 *         link: '#what-it-is'
 *     },
 *     {
 *         name: 'API',
 *         link: '#api',
 *         children: [
 *             {
 *                 name: 'Animations',
 *                 link: '#animations'
 *             }
 *         ]
 *     }
 * ]
 *
 * @param {Array} items
 * @param {boolean} isSub
 *
 * @return {Promise<HTMLElement>}
 */
export default async function createSidebarThree (items, isSub = false) {
    const sidebar = document.createElement('div');

    sidebar.classList.add('sidebar-three');
    if (isSub === true) {
        sidebar.classList.add('sidebar-three_type_item');
    } else {
        sidebar.addEventListener('click', (e) => {
            const target = e.target;

            if (target.classList.contains('sidebar-three__trigger') === false) {
                return;
            }

            const parent = target.closest('.sidebar-three__item');
            const isOpen = parent.classList.contains('sidebar-three__item--open');

            parent.classList.toggle('sidebar-three__item--open');

            target.innerHTML = (isOpen === true) ? '+' : '-';
        });
    }

    const line = document.createElement('span');
    sidebar.append(line);

    line.classList.add('sidebar-three__line');
    if (items.length > 1) {
        line.classList.add('sidebar-three__line_mode_line');
    }

    const elements = document.createElement('ul');
    sidebar.append(elements);

    elements.classList.add('sidebar-three__items');
    for (const item of items) {
        const element = document.createElement('li');
        elements.append(element);

        element.classList.add('sidebar-three__item');

        if (!('children' in item)) {
            element.append(createLink(item.name, item.link));

            continue;
        }

        element.classList.add('sidebar-three__item_type_three');

        const opener = document.createElement('span')
        element.append(opener);

        opener.classList.add('sidebar-three__opener');

        opener.append(createLink(item.name, item.link));
        opener.append(createTrigger());

        element.append(await createSidebarThree(item.children, true));
    }

    return sidebar;
}
