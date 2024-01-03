const loadBalancer = (chinaDownload, USDownload) => Promise.race([chinaDownload, USDownload]);

export default loadBalancer;
