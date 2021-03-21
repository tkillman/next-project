import { gql } from '@apollo/client';

export const adm0020GetOrderListQuery = gql`
	query adm0020GetOrderList($NAME: String) {
		adm0020GetOrderList(NAME: $NAME) {
			OUT_RET_CODE
			OUT_RET_MSG
			OUT_RESULT {
				PASSWD
				NAME
				EMAIL
				PHONE
				STATUS
			}
		}
	}
`;