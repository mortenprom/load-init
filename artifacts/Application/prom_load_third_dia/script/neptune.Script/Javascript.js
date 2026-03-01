sap.n.Shell.attachInit((data) => {
    console.log("prom_load_third_dia", "Init", data);
});

sap.n.Shell.attachBeforeDisplay((data) => {
    console.log("prom_load_third_dia", "Before Display", data);
});