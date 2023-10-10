const form = document.querySelector("#addForm");
const items = document.querySelector(".list-group");
items.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("are u sure")) {
      const li = e.target.parentElement;
      items.removeChild(li);
    }
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = e.target.item.value;
  const ele = document.createElement("li");
  ele.textContent = val;
  ele.style.listStyleType = "none";
  ele.style.border = "1px solid #d4d4d4d4";
  ele.style.padding = "15px";
  const del = document.createElement("button");
  del.textContent = "X";
  del.classList.add("btn-danger", "btn-sm", "float-right", "delete");
  ele.append(del);
  const edit = document.createElement("button");
  edit.textContent = "Edit";
  ele.append(edit);
  items.append(ele);
});
