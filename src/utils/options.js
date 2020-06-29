// 必填
const ruleData= {data:  [{ required: true, message: '此项不能为空', trigger: 'change' }]}
// 数组必填
const ruleDataArr= {dataArray:  [{ required: true, message: '此项不能为空', trigger: 'change' }]}
// 郵箱
const emRuleData= {data:  [{ pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, trigger: 'change',message: '请输入正确邮箱' }]}
// 邮编
const coRuleData= {data:  [{ pattern: /^[0-8][0-7]\d{4}$/, trigger: 'change',message: '请输入正确邮编' }]}
// 固定电话
const liRuleData= {data:  [{ pattern: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}$/, trigger: 'change',message: '请输入正确固定电话' }]}
// 移动电话
const phRuleData= {data:  [{ pattern: /^1[34578]\d{9}$/, trigger: 'change',message: '请输入正确移动电话' }]}
// 身份证号码
const idRuleData= {data:  [{ pattern: /^(\d{18}|\d{17}X)$/, trigger: 'change',message: '请输入正确身份证号码' }]}
// 香港身份证
const hkRuleData= {data:  [{ pattern: /^(\d{8}|\d{10})$/, trigger: 'change',message: '请输入正确香港身份证' }]}
// 澳门身份证
const amRuleData= {data:  [{ pattern: /^(\d{8}|\d{10})$/, trigger: 'change',message: '请输入正确澳门身份证' }]}
// 台湾身份证
const twRuleData= {data:  [{ pattern: /[A-Z][0-9]{9}/, trigger: 'change',message: '请输入正确台湾身份证' }]}
// 外国护照
const enRuleData= {data:  [{ pattern: /^([a-zA-z]|[0-9]){5,17}$/, trigger: 'change',message: '请输入正确外国护照' }]}
// 居民身份证
const chinaIDData= {data:  [{ pattern: /^(\d{18}|\d{17}X)$/, trigger: 'change',message: '请输入正确身份证号码' }]}
export {
    ruleData,
    emRuleData,
    coRuleData,
    liRuleData,
    phRuleData,
    idRuleData,
    hkRuleData,
    amRuleData,
    twRuleData,
    enRuleData,
    ruleDataArr,
    chinaIDData
}