use solana_sdk::{
    account::{Account, KeyedAccount},
    entrypoint,
    pubkey::Pubkey,
    system_instruction,
};

#[entrypoint]
fn print_receipt(
    _program_id: &Pubkey,
    _keyed_accounts: &[KeyedAccount],
    _params: &[u8],
) -> Result<(), String> {
    // Get the account information for the current program
    let account = _keyed_accounts[0].try_account().unwrap();

    // Get the NFT receipt data from the account data
    let nft_receipt = Account::decode_data(&account.data).unwrap();

    // Print out the NFT receipt data
    println!("NFT Receipt: {:?}", nft_receipt);

    Ok(())
}
