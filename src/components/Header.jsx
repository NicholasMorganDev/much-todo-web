import { Input } from "antd";

//post man sets the file for us so this is manual way
export default function Header ({setItemList, setLoading}) {
  const handleAdd = async (value) => {
    if(value.length < 3) return

    setLoading(true)

    const newItem = { //req.body
      done: false,
      userId: 'me',
      item: value,
    }
    const response = await fetch('https://much-todo-api-nm.web.app/items', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    })
    const data = await response.json()
    setItemList(data)
    setLoading(false)
    //reset value = ''
    //accepts true values
  }
  return (
    <header>
      <Input.Search
      placeholder="Add new to do item"
      allowClear
      enterButton="Add"
      size="large"
      onSearch={handleAdd}
      />
    </header>
  )
}