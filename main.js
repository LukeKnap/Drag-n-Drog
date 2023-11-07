const list_items = document.querySelectorAll('.list-item')
const lists = document.querySelectorAll('.list')
// Tímto kódem se získají všechny prvky s třídou 'list-item' a 'list' na stránce. 'list-item' jsou jednotlivé přetahovatelné položky, a 'list' jsou seznamy, do kterých se mohou přetahovat.

let draggedItem = null
// Proměnná draggedItem slouží k uchování informace o průběžně přetahovaném průběžném prvkovi. V kódu je na začátku nastavena na null, což znamená, že žádný prvek není průběžně přetahován, protože na začátku přetahování není žádný prvek "na tah".

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i]

	item.addEventListener('dragstart', () => {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none'
		}, 0)
	})
    /* Tento kód přidává posluchač události 'dragstart' na každém prvku s třídou 'list-item'. Událost 'dragstart' se spustí, když uživatel začne přetahovat tuto položku.
    V rámci události 'dragstart' se nastavuje draggedItem na aktuální přetahovaný prvek (item) a také se nastavuje display prvků na 'none'. To znamená, že se prvek skryje během přetahování.   */

    item.addEventListener('dragend', () => {
        console.log('dragend')
        setTimeout(function () {
            draggedItem.style.display = 'block'
            draggedItem = null
        }, 0)
    })
    /* Tento posluchač reaguje na událost 'dragend', která se spustí po dokončení přetahování položky.
    V rámci události 'dragend' se draggedItem zobrazí znovu (nastaví display na 'block') a draggedItem se vrátí na hodnotu null, protože přetahování bylo dokončeno. */

    for (let j = 0; j < lists.length; j++) {
        const list = lists [j]

        list.addEventListener('dragover', (e) => {
            e.preventDefault() 
        })
        list.addEventListener('dragenter', (e) => {
            e.preventDefault()
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
        })
        list.addEventListener('dragleave', function (e) {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'

        })
        list.addEventListener('drop', function (e) {
            console.log('drop');
            this.append(draggedItem)
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
        })   
    }
 }

 /* Kód obsahuje také posluchače událostí pro seznamy (prvky s třídou 'list'), které jsou cílovými oblastmi, kam mohou být položky přetaženy.
dragover a dragenter posluchače zabraňují výchozímu chování pro přetahování a mění barvu pozadí seznamu, když se položka přesune nad seznam.
dragleave posluchač změní barvu pozadí zpět, když položka opustí seznam.
drop posluchač reaguje na dokončení přetahování položky a vloží draggedItem do seznamu, který je cílem přetahování. Poté se barva pozadí seznamu vrátí zpět na původní hodnotu. */

