sap.n.Shell.attachInit((data) => {
    console.log("prom_load_init_sync", "Init", data);
});

sap.n.Shell.attachBeforeDisplay((data) => {
    console.log("prom_load_init_sync", "Before Display", data);
});