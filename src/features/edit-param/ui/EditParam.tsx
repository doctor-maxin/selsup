import type { ParamValue } from "@/entities/models/Model";
import type { Param } from "@/shared/lib/utility-types/params";
import { type ChangeEvent, type FC, memo, useCallback } from "react";

interface IProps {
    param: Param
    value: any
    onChange: (value: ParamValue) => void
}

export const EditParam: FC<IProps> = memo(({ value, param, onChange }) => {
    const onInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (param.type === 'string') {
            onChange({
                value: e.target.value,
                paramId: param.id
            });
            return;
        }
    
        console.error('EditParam: paramType not implemented:', param.type);
    }, [param, onChange]);

    return <input type="text" value={value} onChange={onInput} />
})