const books =
    [
        {
        "id"         : 0,
        "mission"    : 3,
        "marketing"  : 1,
        "management" : 2,
        "product"    : 1,
        "sales"      : 1
        },
        {
        "id"         : 1,
        "mission"    : 3,
        "marketing"  : 3,
        "management" : 0,
        "product"    : 2,
        "sales"      : 1
        } 
    ];

function sortByCategory(cat)
{
    books.sort(function(a, b)
        {
            return (b[cat] - a[cat]);
        });

    const list = document.querySelector(".book-card-list");

    for (let b of books)
    {
        const bElem = document.querySelector("#b" + b.id);
        bElem.remove();
        list.appendChild(bElem);
    }
}