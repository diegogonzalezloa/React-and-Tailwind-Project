function List({ arr }) {
    const listItems = arr.map((item, index) => (
        <li key={index} className="shadow-xl/7 rounded-xl">
            <div className="px-4 py-1 bg-neutral-200/80 rounded-t-xl text-sm text-black/80">
                {item.title}
            </div>
            <div className="bg-white p-6 rounded-b-xl grid place-items-center text-center">
                {item.component}
            </div>
        </li>
    ));

    return (
        <ul className="flex flex-col gap-y-13 max-w-lg mx-auto">{listItems}</ul>
    );
}

export default List;
