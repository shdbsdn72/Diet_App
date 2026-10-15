export const recipes=[
 {name:'닭가슴살 그린 볼',type:'가볍고 든든한 한 끼',ingredients:['닭가슴살','현미','브로콜리'],kcal:425,protein:38,emoji:'🥗',steps:'현미밥 100g에 익힌 닭가슴살 120g, 데친 브로콜리 80g을 올리고 올리브유와 레몬즙을 곁들이세요.'},
 {name:'두부 달걀 스크램블',type:'단백질을 채우는 아침',ingredients:['두부','달걀','토마토'],kcal:310,protein:26,emoji:'🍳',steps:'물기를 뺀 두부 150g과 달걀 2개를 약불에 볶고 토마토 1개를 곁들이세요.'},
 {name:'고구마 요거트 플레이트',type:'간편한 에너지 충전',ingredients:['고구마','그릭요거트','바나나'],kcal:360,protein:18,emoji:'🍠',steps:'찐 고구마 150g, 무가당 그릭요거트 150g, 바나나 반 개를 접시에 담아 드세요.'},
 {name:'연어 아보카도 덮밥',type:'균형 잡힌 건강한 점심',ingredients:['연어','아보카도','현미'],kcal:510,protein:30,emoji:'🥑',steps:'익힌 연어 120g과 아보카도 반 개를 현미밥 100g에 올리고 간장을 소량 곁들이세요.'}
];
export function recommend(pantry,excluded=[]){return recipes.filter(r=>!r.ingredients.some(i=>excluded.includes(i))).map(r=>({...r,matched:r.ingredients.filter(i=>pantry.includes(i)).length})).sort((a,b)=>b.matched-a.matched)}
export function metrics(p){const h=Number(p.height)/100,w=Number(p.weight),t=Number(p.target);return {bmi:h>0?w/(h*h):0,remaining:Math.max(0,w-t),progress:p.initial>t?Math.max(0,Math.min(100,(p.initial-w)/(p.initial-t)*100)):0}}
