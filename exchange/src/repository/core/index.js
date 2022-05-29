import axios from "axios";
class Core {
  getBtcPrice = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        "https://api.bitaps.com/market/v1/ticker/btcusd"
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.message;
    }
    return result;
  };
  getEthPrice = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        "https://api.bitaps.com/market/v1/ticker/ethusd"
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.message;
    }
    return result;
  };
  getLtcPrice = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        "https://api.bitaps.com/market/v1/ticker/ltcusd"
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.message;
    }
    return result;
  };
  getXrpPrice = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        "https://api.bitaps.com/market/v1/ticker/xrpusd"
      );
      result.value = response.data
    } catch (e) {
      result.error = e.message;
    }
    return result;
  };
  getBchPrice = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        "https://api.bitaps.com/market/v1/ticker/bchusd"
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.message;
    }
    return result;
  };
}

export default new Core();
