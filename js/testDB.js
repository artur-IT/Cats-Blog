const testDB = () => {
  var dbName = "JsStore_Demo";
  var tblProduct = {
    name: "Product",
    columns: {
      // Here "Id" is name of column
      id: { primaryKey: true, autoIncrement: true },
      itemName: { notNull: true, dataType: "string" },
      price: { notNull: true, dataType: "number" },
      quantity: { notNull: true, dataType: "number" },
    },
  };
  var database = {
    name: dbName,
    tables: [tblProduct],
  };
};

export default testDB;
