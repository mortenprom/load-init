sap.n.Shell.attachInit((data) => {
    console.log("prom_load_second_sync", "Init", data);
});

sap.n.Shell.attachBeforeDisplay((data) => {
    console.log("prom_load_second_sync", "Before Display", data);
});