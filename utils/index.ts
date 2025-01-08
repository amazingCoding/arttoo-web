import { useEffect } from "react";
import { useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    setSize([window.innerWidth, window.innerHeight]);
    const updateSize = () => { setSize([window.innerWidth, window.innerHeight]); }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

// 正则表达式解释：
// ^$ 匹配空字符串
// |    或者
// ^[1-9]\d*$ 匹配正整数
// ^0$ 匹配单个0
// ^[1-9]\d*\.\d*$ 匹配小数（小数点前必须有数字且不能以0开头，小数点后可以有或没有数字）
// ^0\.\d*$ 匹配以0开头的小数
const numberRegex = /^$|^[1-9]\d*$|^0$|^[1-9]\d*\.\d*$|^0\.\d*$/

// 使用示例：
export const isValidNumber = (value: string): boolean => {
  return numberRegex.test(value)
}

export const formatNumber = (value: number): string => {
  return value.toFixed(2)
}

export const formatAddress = (address: string): string => {
  return address.slice(0, 4) + '...' + address.slice(-4)
}

export const copyString = (str: string | number): boolean => {
  const input = document.createElement('input')
  input.setAttribute('readonly', 'readonly')
  input.setAttribute('type', 'text')
  input.setAttribute('value', `${str}`)
  document.body.appendChild(input)
  input.setSelectionRange(0, 9999)
  input.select()
  if (document.execCommand('copy')) {
    document.body.removeChild(input)
    return true
  }
  document.body.removeChild(input)
  return false

}

export const formatDate = (date: Date): string => {
  // 1994-05-12
  const month = date.getMonth() + 1
  const day = date.getDate()
  return date.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
}