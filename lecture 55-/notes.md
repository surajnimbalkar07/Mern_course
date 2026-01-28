in case of callstack there will be 3 diffrerent section to execute asynchronous operations :

web api
microtask queue
task queue(macrotask queue)

web apis:
the task that are out of default behaviour of js like localstorage or async operation like settimeout ,fetch all are handled by web apis


starving:each microtask adds another microtask before executing properly then macrotask never gets a chanceto enter call stack