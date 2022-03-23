
import { useEffect, useState } from 'react'
import getTeffila from './getTefilla';


export default function getDavening(props) {

    const data = props.route.params.data.times;

    const tefillaTime = getTeffila(data);

    const [tefillas, setTefillas] = useState([]);
    const fetchTefilla = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Tefilla not found')
            }
            let json = await response.json();
            return json;
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        (async () => {
            let curTef = await fetchTefilla(tefillaTime.start);

            setTefillas((tefillas) => [...tefillas, curTef.he[0], curTef.he[1]]);

            while (curTef.next && `https://www.sefaria.org/api/texts/${curTef.next.replace(/\s/g, '_')}` !== tefillaTime.end) {
                //replace space with undescore
                let nextTef = curTef.next.replace(/\s/g, '_');
                /***
                 * SCHEMA:
                 *  weekday/shabbos 
                 *  /tefilla for  shachris/mincha/mariv
                 *  /mincha/mariv this is last node for singles (not including amida) , shachris splits extra nodes per section (pesukei dizimra) 
                 *  /an extra node for shachris (baruch sheamar)
                 */

                let list = nextTef.split(',');
                let last = list[list.length - 1];
                let secondToLast = list[list.length - 2];
                let thirdToLast = list[list.length - 3];


                if (tefillaTime.removeArr.includes(last) || tefillaTime.removeArr.includes(secondToLast) || tefillaTime.removeArr.includes(thirdToLast)) {
                    //get next
                    curTef = await fetchTefilla(`https://www.sefaria.org/api/texts/${nextTef}`);
                }
                else {
                    curTef = await fetchTefilla(`https://www.sefaria.org/api/texts/${nextTef}`);
                    // all hebrew
                    for (let j = 0; j < curTef.he.length; j++) {
                        setTefillas((tefillas) => [...tefillas, curTef.he[j]]);
                    }
                }
            }
        })();
    }, []);

    return tefillas;
}